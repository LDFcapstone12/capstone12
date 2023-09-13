"use client";
import React, { useState } from 'react'; 

export const metadata = {
    title: 'Contact Us : BSA Senior Citizens Association',
  };


export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        email: '',
        subject: '',
        message: '',
    });
      
        const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };
      
    const handleSubmit = (e) => {
        e.preventDefault();
      
        setFormData({
            name: '',
            contactNumber: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="max-w-[700px] w-full px-4 py-8">
            <p className="text-xl tracking-widest text-center font-bold uppercase text-black">
              Contact Us
            </p>
            <h2 className="py-4 italic text-center">Please don't hesistate to reach out with your questions, suggestions, or if you need assistance.</h2>
            <div className="w-full h-auto border-[#affd2d] border-t-4 shadow-lg shadow-gray-400 rounded-xl p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="border-2 rounded-lg p-3 border-gray-400"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      autoComplete="name"
                    />
                    </div>

                    <div className="flex flex-col">
                    <label htmlFor="contactnumber" className="uppercase text-sm py-2">
                      Contact Number
                    </label>
                    <input
                      id="contactnumber"
                      name="contactNumber"
                      className="border-2 rounded-lg p-3 border-gray-400"
                      type="text"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      required
                    />
                    </div>
                    </div>

                    <div className="flex flex-col py-2">
                    <label htmlFor="emailaddress" className="uppercase text-sm py-2">
                      Email Address
                    </label>
                    <input
                      id="emailaddress"
                      name="email"
                      className="border-2 rounded-lg p-3 border-gray-400"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                  
                  <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    className="border-2 rounded-lg p-3 border-gray-400"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  </div>

                  <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="border-2 rounded-lg p-3 border-gray-400"
                    rows={10}
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  </div>

                  <button type='submit'
                    className="w-full rounded-xl p-4 text-black bg-[#affd2d] mt-4">
                      Send Message
                  </button>
                </form>
                <div className='bg-slate-100 flex flex-col'>
                  <div className='text-red-600 px-5 oy-2'>Error message</div>
                </div>
            </div>
          </div>
        </div>
    )
}