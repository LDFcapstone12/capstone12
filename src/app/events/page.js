import React from "react";
import { GrFacebook } from 'react-icons/Gr';
import Link from "next/link";

export const metadata = {
    title: 'News & Events : BSA Senior Citizens Association',
};

export default function events() {
    return (
        <div>
            <div className="flex text-lg text-center justify-center mt-10">
                <div>
                    <h1 className="text-2xl uppercase font-bold underline text-blue-900">On-going Senior Citizens Annual Validation</h1>
                    <p className="text-justify align-center mt-2 ml-20 mr-20">
                    We kindly remind the Senior Citizen members of Brgy. San Antonio not to miss the annual validation, 
                    as this will entitle you to receive the P3,000 cash gift in December. We encourage everyone to allocate 
                    time for the validation process. The validation period extends until September 2023. For questions, you can call April dela Torre at 0942-5625732. </p>
                    
                    <div className="items-center justify-center text-lg">
                    <h2 className="text-xl uppercase font-bold mt-5">Things to know about the purpose of the validation:</h2>
                    <p className="text-justify ml-20 mr-20 mt-3">1. To see, check up on, and re-interview each senior citizen of Pasig, as well 
                        as to allow them to update their profile information and maintain their names in our active master list of 
                        legitimate members of the Senior Citizen group in Pasig.</p>
                    <p className="text-justify ml-20 mr-20 mt-3">2. To update or modify our database if there have been changes in the present address, active contact number, 
                        health condition, and other information we need to know about the senior's condition, which we can relate to 
                        social welfare programs offered by our government.</p>
                    <p className="text-justify ml-20 mr-20 mt-3">3. If there have been issues with the application or qualification for the senior's applied program, 
                        their questions, suggestions, or other concerns will be given attention, explanation, and sputions here to 
                        provide assistance.</p>
                    <p className="text-justify ml-20 mr-20 mt-3">4. This is also where we gather actual data or the number of beneficiaries, which serves as a crucial basis 
                        for every new program or ordinance launched by our local government unit (LGU). For instance, the count of 
                        seniors who are PWD (Persons with Disabilities), bedridden, relocatees, indigent, retired professionals, 
                        displaced workers, and other important types of social sectors that contribute to our advocacy of "Data-Driven Governance"
                        that our Local Government intensifies.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap lg:items-center mt-10 p-12">
                <div className="w-full lg:w-1/2">
                    <img src="/assets/news/N1.jpg" alt="" className="mx-auto mb-4 lg:mb-0" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h2 className="lg:ml-2 text-2xl font-bold uppercase underline py-2 text-blue-900">FYI Senior Citizens!</h2>
                    <p className="lg:ml-2 text-xl text-justify py-2">Sa bisa ng Ordinance No.72-2023 na ipinasa ng 11th Sangguniang Panlungsod ng Pasig at sa pamumuno ni Mayor Vico Sotto,
                        LIBRE NA PO ULIT ANG PANONOOD NG SINE PARA SA SENIOR CITIZENS NG PASIG CITY!</p>
                    <h3 className="lg:ml-2 text-xl py-2 mt-2 font-bold">Konting paalala:</h3>
                    <p className="lg:ml-2 text-xl py-2">1. Dalhin ang Senior ID at Cinema Booklet (na makukuha sa OSCA OFFICE, 4th Floor Pasig City Hall)</p>
                    <p className="lg:ml-2 text-xl py-2">2. 1 PALABAS lang kada LUNES</p>
                    <p className="lg:ml-2 text-xl py-2">3. Mga pelikulang nasa 2nd SCREENING WEEK ang pwedeng pagpilian.</p>
                    <p className="flex mt-6 items-center m-10 text-blue-900 justify-center font-bold">
                    Credit to: Councilor Pao Santiago's Facebook Page</p>
                </div>
            </div>
        </div>
    )
}
