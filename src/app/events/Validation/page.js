import Image from "next/image";
import React from "react";

export const metadata = {
  title: 'Annual Validation : BSA Senior Citizens Association',
};

export default function Validation() {
  return (
    <div className="w-full lg:items-center gap-10 mt-5 p-6">
      <h1 className="lg:ml-1 text-2xl text-center font-bold uppercase py-2">
        ANNUAL SENIOR CITIZENS' VALIDATION
      </h1>
      <div className="border shadow-lg rounded-xl shadow-gray-500">
        <img
          src="/assets/news/Validation.png"
          width="700"
          height="300"
          alt="Validation"
          className="mx-auto mb-4 lg:mb-3"
        />
      <p className="w-10/12 text-lg text-justify mt-3 mx-auto">
        We kindly remind the Senior Citizen members of Brgy. San Antonio not to miss the annual validation, 
        as this will entitle you to receive the P3,000 cash gift in December. We encourage everyone to allocate 
        time for the validation process. For questions, you 
        can call <span className="font-semibold">April dela Torre at 0942-5625732.</span> 

      </p>
      <div className="w-10/12 text-lg text-justify mx-auto mt-5">
      <h2 className="uppercase mx-auto font-semibold italic">things to know about the purpose of the validation:</h2>
      <p className="text-justify mt-3">1. To see, check up on, and re-interview each senior citizen of Pasig, as well 
        as to allow them to update their profile information and maintain their names in our active master list of 
        legitimate members of the Senior Citizen group in Pasig.</p>
        <p className="text-justify mt-3">2. To update or modify our database if there have been changes in the present address, active contact number, 
        health condition, and other information we need to know about the senior's condition, which we can relate to 
        social welfare programs offered by our government.</p>
        <p className="text-justify mt-3">3. If there have been issues with the application or qualification for the senior's applied program, 
        their questions, suggestions, or other concerns will be given attention, explanation, and sputions here to 
        provide assistance.</p>
        <p className="text-justify mt-3 mb-10">4. This is also where we gather actual data or the number of beneficiaries, which serves as a crucial basis 
        for every new program or ordinance launched by our local government unit (LGU). For instance, the count of 
        seniors who are PWD (Persons with Disabilities), bedridden, relocatees, indigent, retired professionals, 
        displaced workers, and other important types of social sectors that contribute to our advocacy of "Data-Driven Governance"
        that our Local Government intensifies.</p>  
      </div>  
      </div>     
    </div>     
  );
}
