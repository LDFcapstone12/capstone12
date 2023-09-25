"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    contactnumber: "",
    idnumber: "",
    address: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const onSignup = async () => {
  }

  useEffect(() => {
    if(user.idnumber.length > 0 && user.contactnumber.length > 0) {
      setButtonDisabled(false);
    } else  {
      setButtonDisabled(true);
    }
  }, [user]);

  

 

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-[700px] w-full px-4 py-8">
        <p className="text-xl tracking-widest text-center font-bold uppercase text-black">
          Explore, Engage, Empower!
        </p>
        <h2 className="py-4 italic text-center">
          Join the online database of the Senior Citizens Association in Brgy.
          San Antonio
        </h2>
        <div className="w-full h-auto border-[#affd2d] border-t-4 shadow-lg shadow-gray-400 rounded-xl p-4">
          <form>
            <div className="flex flex-col gap-4 w-full py-2">
            <div className="flex flex-col">
                <label htmlFor="firstName" className="uppercase font-semibold">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={(e) => setUser({...user, firstName: e.target.value})}
                  placeholder="First Name"
                  className="py-3 px-3 border rounded-lg mt-1"
                />

                <label
                  htmlFor="middleName"
                  className="mt-4 uppercase font-semibold"
                >
                  Middle Name
                </label>
                <input
                  id="middleName"
                  type="text"
                  name="middleName"
                  value={user.middleName}
                  onChange={(e) => setUser({...user, middleName: e.target.value})}
                  placeholder="Middle Name"
                  className="py-3 px-3 border rounded-lg mt-1"
                />

                <label htmlFor="lastName" className="mt-4 uppercase font-semibold">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={(e) => setUser({...user, lastName: e.target.value})}
                  placeholder="Last Name"
                  className="py-3 px-3 border rounded-lg mt-1"
                />

                <label htmlFor="birthdate" className="mt-4 uppercase font-semibold">
                  Birth Date
                </label>
                <input
                  id="birthdate"
                  type="date"
                  name="birthdate"
                  value={user.birthdate}
                  onChange={(e) => setUser({...user, birthdate: e.target.value})}
                  placeholder="Birth Date"
                  className="py-3 px-3 border rounded-lg"
                />

                <label
                  htmlFor="contactnumber"
                  className="mt-4 uppercase font-semibold"
                >
                  Contact Number
                </label>
                <input
                  id="contactnumber"
                  type="text"
                  name="contactnumber"
                  value={user.contactnumber}
                  onChange={(e) => setUser({...user, contactnumber: e.target.value})}
                  placeholder="Contact Number"
                  className="py-3 px-3 border rounded-lg"
                />

                <label htmlFor="idnumber" className="mt-4 uppercase font-semibold">
                  OSCA ID No.
                </label>
                <input
                  id="idnumber"
                  type="text"
                  name="idnumber"
                  value={user.idnumber}
                  onChange={(e) => setUser({...user, idnumber: e.target.value})}
                  placeholder="ID Number"
                  className="py-3 px-3 border rounded-lg"
                />

                <div className="flex flex-col">
                  <label htmlFor="address" className="mt-4 uppercase font-semibold">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={(e) => setUser({...user, address: e.target.value})}
                    placeholder="Address"
                    className="py-3 px-3 border rounded-lg mt-1"
                    autoComplete="address-line1"
                  />
            </div>
            <div className="flex flex-col items-center justify-center py-4 px-4 mt-6">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
                disabled={buttonDisabled}
              >
                {buttonDisabled ? "Register here" : "Register"}
              </button>
              <Link className="mt-4 text-green-900 font-bold underline" href="/">
                Get Started
              </Link>
            </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
