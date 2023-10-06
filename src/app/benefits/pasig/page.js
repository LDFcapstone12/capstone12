"use client";
import React, { useState } from 'react';

const paragraphStyles = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
};

function ExpandableSection({ content, isExpanded, toggleExpand }) {
  return (
    <div>
      <div className="py-4 font-serif lg:text-xl text-lg tracking-wide text-justify" style={isExpanded ? null : paragraphStyles}>
        {content}
      </div>
      <button className='mt-3 py-1 p-3 border bg-blue-800 text-white font-semibold' onClick={toggleExpand}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default function Pasig() {
    const [section1Expanded, setSection1Expanded] = useState(false);
    const [section2Expanded, setSection2Expanded] = useState(false);
    const [section3Expanded, setSection3Expanded] = useState(false);
    const [section4Expanded, setSection4Expanded] = useState(false);
    const [section5Expanded, setSection5Expanded] = useState(false);
    const [section6Expanded, setSection6Expanded] = useState(false);
    const [section7Expanded, setSection7Expanded] = useState(false);



    const section1Content = `
    The revival of this program is a direct result of the passage of Ordinance No. 72-2023 by the 11th City
    Council of Pasig. This legislative decision underscores the forward-thinking and compassionate leadership of
    Mayor Vico Sotto, who has consistently demonstrated his commitment to the welfare and contentment of Pasig's senior 
    citizens. Councilor Pao Santiago, who is entrusted with the oversight of Senior Citizens affairs, has played a 
    pivotal role in bringing this initiative back to life. The nearest screening venue for our beloved Barangay San Antonio
    resident is the Estancia Mall and Ayala Malls the 30th.
  `;

  const section2Content = `
    Senior citizens in Pasig City enjoy the valuable benefit of free hospitalization and prescribed medications at the 
    Pasig City General Hospital, located on M. Eusebio Avenue in Barangay Maybunga, Pasig City. This program eases the 
    financial burden of healthcare expenses and ensures seniors receive essential medical care and prescribed medications
    demonstrating the city's commitment to their well-being and quality of life.
  `;

  const section3Content = `
    The City Health Department collaborated closely with the Barangay Administration and the Senior Citizens Associatio to execute
    this initiative effectively. Together, they coordinate vaccination drives and outreach efforts to reach as many senior citizens
    as possible. These vaccines play a crucial role in safeguarding the health and well-being of elderly residents, reducing their
    susceptibility to these potentially severe illnesses. By providing these vaccinations, the city demonstrate its commitment to 
    promoting the health and longevity of its senior citizens, fostering a healthier and more resilient community.
  `;

  const section4Content = `
    Generous financial incentives are provided to senior citizens as a token of appreciation and recognition for their remarkable longevity. 
    Specifically, those aged between 90 and 94 receive a substantial incentive of P10,000, while senior citizens aged between 95-100 are awarded
    an even more substantial amound of P20,000. In Barangay San Antonio, this heartwarming initiative has already benefited a select group of exceptional
    individuals. To date, we have had the privilege of honoring and awarding this esteemed incentive to fewer than 10 senior citizens who have reached the
    impressive milestone of being between 90-95 years old. Additionally, our community proudly celebrates the remarkable achievement of one centenarian, 
    a senior citizen who has reached the remarkable age of 100 years.
  `;  
  
  const section5Content = `
    To acknowledge and appreciate the significant contribution made by senior citizens to our society, as well as 
    to encourage civic participation, an innovative program has been launched. This program entails granting a year-end
    cash subsudy of P3,000 to senior citizens who have been consistently upheld their registration as voters for at least 
    two years. It underscores our dedication to fostering a society where all citizens, regardless of their age, experience a 
    sense of worth and inclusion in the democratic system.
  `;  

  const section6Content = `
    The P5,000 Burial Assistance Program for deceased Pasig OSCA ID holders reflects our commitment
    to helping seniors and their families during tough times, offering financial support and easing 
    the burden of funeral expenses.
  `;  

  const section7Content = `
    The LSP, or Local Senior Pension Program, is a vital initiative designed to provide financial assistance
    to disadvantaged senior citizens aged 65 and above. This assistance is specifically targeted at those who do 
    not receive financial support from their families and do not have any other pension arrangements through agencies like the 
    Social Security System (SSS) or the Government Service Insurance System (GSIS), with the exemption of the
    Department of Social Welfare and Development (DSWD) Social Pension. Under the LSP program, each eligible beneficiary
    is granted a monthly stipend of P500. This financial aid is not only intended to alleviate the economic hardships faced
    by indigent senior citizens but also to ensure that they have a minimum level of financial security to meet their
    basic needs and maintain a decent quality of life. By providing this monthly support, the LSP program plays a crucial
    role in enhancing the well-being and dignity of vulnerable elderly individuals within our society.
  `;  



    return (
        <div className="w-100% mt-12 my-10">
            <div className="flex flex-1 justify-start items-center flex-col">
                <div className="font-bold text-2xl uppercase tracking-wide text-blue-900">
                    <h1>Pasig City</h1>
                    </div>
                <div className="w-full lg:w-10/12 p-5 mt-5">
                    <h1 className="lg:ml-1 md:w-10/12 text-xl font-semibold uppercase py-2">
                    1. complimentary movie tickets
                    </h1>
                    <ExpandableSection
                    content={section1Content}
                    isExpanded={section1Expanded}
                    toggleExpand={() => setSection1Expanded(!section1Expanded)}
                    />
                    <h2 className='text-blue-950 text-lg font-semibold mt-5 uppercase'>Take note of the following guidelines:</h2>   
                        <ul className='border bg-gray-100 text-justify px-2 font-serif lg:text-xl text-lg tracking-wide'>
                            <li className='ml-2 text-lg'>1. Senior ID and Cinema Booklet.</li>
                            <li className='ml-2 text-lg'>2. Screening schedule.</li>
                            <li className='ml-2 text-lg'>3. Movie selection.</li>
                        </ul>
                </div> 

                <div className="w-full lg:w-10/12 p-5 mt-5">
                    <h1 className="lg:ml-1 md:w-10/12 text-xl font-semibold uppercase py-2">
                    2. free hospitalization and prescribed medications
                    </h1>
                    <ExpandableSection
                    content={section2Content}
                    isExpanded={section2Expanded}
                    toggleExpand={() => setSection2Expanded(!section2Expanded)}
                    />
                    <h2 className='text-blue-950 text-lg font-semibold mt-5 uppercase'>Take note of the following guidelines:</h2>   
                        <ul className='border bg-gray-100 text-justify px-2 font-serif lg:text-xl text-lg tracking-wide'>
                            <li className='ml-2 text-lg'>1. Bring your senior citizen&apos;s ID.</li>
                            <li className='ml-2 text-lg'>2. Have an updated prescription with you.</li>
                            <li className='ml-2 text-lg'>3. Bring any relevant medical records if available.</li>
                        </ul>
                </div> 

                <div className="w-full lg:w-10/12 p-5 mt-5">
                    <h1 className="lg:ml-1 md:w-10/12 text-xl font-semibold uppercase py-2">
                    3. flu and pneumococcal vaccine
                    </h1>
                    <ExpandableSection
                    content={section3Content}
                    isExpanded={section3Expanded}
                    toggleExpand={() => setSection3Expanded(!section3Expanded)}
                    />
                    <h2 className='text-blue-950 text-lg font-semibold mt-5 uppercase'>Take note of the following guidelines:</h2>   
                        <ul className='border bg-gray-100 text-justify px-2 font-serif lg:text-xl text-lg tracking-wide'>
                            <li className='ml-2 text-lg'>1. Bring your senior citizen&apos;s ID.</li>
                            <li className='ml-2 text-lg'>2. Bring your vaccination record.</li>
                        </ul>
                </div>

                <div className="w-full lg:w-10/12 p-5 mt-5">
                    <h1 className="lg:ml-1 md:w-10/12 text-xl font-semibold uppercase py-2">
                    4. centenarian
                    </h1>
                    <ExpandableSection
                    content={section4Content}
                    isExpanded={section4Expanded}
                    toggleExpand={() => setSection4Expanded(!section4Expanded)}
                    />
                    <h2 className='text-blue-950 text-lg font-semibold mt-5 uppercase'>Take note of the following requirements:</h2>   
                        <ul className='border bg-gray-100 text-justify px-2 font-serif lg:text-xl text-lg tracking-wide'>
                            <li className='ml-2 text-lg'>1. Photocopy of Birth Certificate(PSA/NSO) or Certified True Copy from the Local Civil Registry, or Baptismal Certificate.</li>
                            <li className='ml-2 text-lg'>2. Photocopy of Senior Citizen&apos;s ID (front and back)</li>
                            <li className='ml-2 text-lg'>3. Pasig City Cash Card</li>
                            <li className='ml-2 text-lg'>4. Original of Barangay Clearance</li>
                            <li className='ml-2 text-lg'>5. Original of Certificate of Membership from Senior Citizens Association in your Barangay.</li>
                            <li className='ml-2 text-lg'>6. Latest Picture (whole body)</li>
                            <li className='ml-2 text-lg'>7. Contact number of applicant or claimant.</li>

                        </ul>
                </div> 

                <div className="w-full lg:w-10/12 p-5 mt-5">
                    <h1 className="lg:ml-1 md:w-10/12 text-xl font-semibold uppercase py-2 ">
                    5. year-end cash gift
                    </h1>
                    <ExpandableSection
                    content={section5Content}
                    isExpanded={section5Expanded}
                    toggleExpand={() => setSection5Expanded(!section5Expanded)}
                    />
                    <h2 className='text-blue-950 text-lg font-semibold mt-5 uppercase'>Take note of the following requirements:</h2>   
                        <ul className='border bg-gray-100 text-justify px-2 font-serif lg:text-xl text-lg tracking-wide'>
                            <li className='ml-2 text-lg'>1. You must have a senior id</li>
                            <li className='ml-2 text-lg'>2. Must have a Pasig City cash card</li>
                        </ul>
                </div>  

                <div className="w-full lg:w-10/12 p-5 mt-5">
                    <h1 className="lg:ml-1 md:w-10/12 text-xl font-semibold uppercase py-2">
                    6. BURIAL ASSISTANCE
                    </h1>
                    <ExpandableSection
                    content={section6Content}
                    isExpanded={section6Expanded}
                    toggleExpand={() => setSection6Expanded(!section6Expanded)}
                    />
                    <h2 className='text-blue-950 text-lg font-semibold mt-5 uppercase'>Take note of the following requirements:</h2>   
                        <ul className='border bg-gray-100 text-justify px-2 font-serif lg:text-xl text-lg tracking-wide'>
                            <li className='ml-2 text-lg'>1. Certified True Copy Death Certificate with Registry No.</li>
                            <li className='ml-2 text-lg'>2. Marriage Contract Husband/Wife of Deceased </li>
                            <li className='ml-2 text-lg'>4. 2 Valid ID claimant</li>
                            <li className='ml-2 text-lg'>5. Birth certificate of child claimant</li>
                            <li className='ml-2 text-lg'>6. Surrender original OSCA white ID and Cash card of deceased member.</li>
                            <li className='ml-2 text-lg'>7. Voters certificate if he/she died outside residence of Pasig City</li>
                            <li className='ml-2 text-lg'>8. Certification from the Barangay Senior Association that the deceased is included in the masterlist
                            of Senior Citizens member in the barangay.</li>
                            <li className='ml-2 text-lg'>9. Special Power of Attorney.</li>
                            <li className='ml-2 text-lg'>10. Affidavit.</li>
                        </ul>
                </div> 

                <div className="w-full lg:w-10/12 p-5 mt-5">
                    <h1 className="lg:ml-1 md:w-10/12 text-xl font-semibold uppercase py-2">
                    7. local senior pension
                    </h1>
                    <ExpandableSection
                    content={section7Content}
                    isExpanded={section7Expanded}
                    toggleExpand={() => setSection7Expanded(!section7Expanded)}
                    />
                    <h2 className='text-blue-950 text-lg font-semibold mt-5 uppercase'>Take note of the following guidelines:</h2>   
                        <ul className='border bg-gray-100 text-justify px-2 font-serif lg:text-xl text-lg tracking-wide'>
                            <li className='ml-2 text-lg'>1. You must not be receiving any form of pension except for the DSWD Social Pension Program.</li>
                            <li className='ml-2 text-lg'>2. You need to submit an LSP application form.</li>
                            <li className='ml-2 text-lg'>3. The city hall will schedule interviews or assessments for those who have applied for the Local Senior Pension.</li>
                        </ul>
                </div>
            </div>
        </div>
        
    )
}