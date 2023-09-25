"use client";
import React, { useState } from 'react';

export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState (false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

      const { msg, success } = await res.json();
      setError(msg);
      setSuccess(success);

      if (success) {
        setFullname("");
        setEmail("");
        setMessage("");
      }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-screen-md w-full px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center italic text-gray-600">
          Please don't hesitate to reach out with your questions, suggestions, or if you need assistance.
        </p>
        <form onSubmit={handleSubmit} className="border-t-4 border-[#affd2d] shadow-lg rounded-xl p-4 mt-4 space-y-4">
          <div className="flex flex-col">
            <label htmlFor="fullname" className="uppercase text-sm font-bold py-2">
              Full Name
            </label>
            <input
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              id="fullname"
              className="border-2 rounded-lg p-3 border-gray-400"
              type="text"
              required
              autoComplete="name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="uppercase text-sm font-bold py-2">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              onChange={(e) => setMessage(e.target.value)}
              value={message}
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

        <div className="bg-slate-100 flex flex-col mt-4">
          {error && error.map((e, index) => (
            <div
              key={index}
              className={`${formSuccess ? "text-green-800" : "text-red-600"} px-5 py-2`}
            >
              {e}
        </div>
          ))}
        </div>
      </div>
    </div>
  );
}
