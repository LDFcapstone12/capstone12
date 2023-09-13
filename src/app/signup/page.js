"use client";
import React, { useState } from "react";

export default function SignupPage() {
  const [user, setUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Implement user registration logic here
    // For example, make an API request to create a new user

    console.log("User registration data:", user);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4">
      <div className="shadow-lg shadow-gray-400 p-5 rounded-lg border-t-4 border-[#affd2d]">
        <h1 className="text-xl text-center font-bold my-4">Explore, Engage, Empower!</h1>
        <p className="text-center text-sm py-2 mt-4">Join the online database of the Senior Citizens Association in Brgy. San Antonio</p>

        <div className="grid grid-cols-1 mt-5 gap-4">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="py-2 rounded-lg"
          />
          <label htmlFor="middleName">Middle Name</label>
          <input
            id="middleName"
            type="text"
            name="middleName"
            value={user.middleName}
            onChange={handleChange}
            placeholder="Middle Name"
            className="py-2 rounded-lg"
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="py-2 rounded-lg"
          />
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
            placeholder="Address"
            className="py-2 rounded-lg"
            autoComplete="address-line1"
          />
          
          <button
            type="submit"
            className="bg-blue-500 mt-4 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
}
