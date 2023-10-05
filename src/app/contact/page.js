import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Message sent successfully!');
      } else {
        console.error('Error sending message');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-screen-md w-full px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center italic text-gray-600">
          Please don&apos;t hesitate to reach out with your questions, suggestions, or if you need assistance.
        </p>
        <form onSubmit={handleSubmit} className="border-t-4 border-[#affd2d] shadow-lg rounded-xl p-4 mt-4 space-y-4">
          <div className="flex flex-col">
            <label htmlFor="fullname" className="uppercase text-sm font-bold py-2">
              Full Name
            </label>
            <input
              onChange={handleChange}
              value={formData.fullname}
              id="fullname"
              className="border-2 rounded-lg p-3 border-gray-400"
              type="text"
              required
              autoComplete="fullname"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="uppercase text-sm font-bold py-2">
              Email
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              type="text"
              id="email"
              className="border-2 rounded-lg p-3 border-gray-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="uppercase text-sm font-bold py-2">
              Message
            </label>
            <textarea
              onChange={handleChange}
              value={formData.message}
              id="message"
              className="border-2 rounded-lg p-3 border-gray-400"
              rows={6}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#affd2d] text-gray-700 font-bold hover:bg-[#85c903] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
