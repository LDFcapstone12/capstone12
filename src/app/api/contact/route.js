import mongoose from "mongoose";


const connectToDatabase = async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const contactSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();

      const { fullname, email, message } = req.body;

      const contact = new Contact({ fullname, email, message });
      await contact.save();

      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error handling contact form submission:', error.message);
      res.status(500).json({ message: 'Error sending message' });
    } finally {
      mongoose.connection.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
