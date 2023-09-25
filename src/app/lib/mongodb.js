import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            });
            console.log("db connected");
        }
    } catch (error) { 
        console.error("Error connecting to the database:", error);
    }
};  

export default connectDB;
