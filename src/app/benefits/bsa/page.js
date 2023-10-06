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
      <div className="text-justify text-lg" style={isExpanded ? null : paragraphStyles}>
        {content}
      </div>
      <button className='mt-3 py-1 p-3 border bg-blue-800 text-white font-semibold' onClick={toggleExpand}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default function Bsa() {
  const [section1Expanded, setSection1Expanded] = useState(false);
  const [section2Expanded, setSection2Expanded] = useState(false);
  const [section3Expanded, setSection3Expanded] = useState(false);
  const [section4Expanded, setSection4Expanded] = useState(false);


  const section1Content = `
    The association, with a substantial one-million peso budget allocated for senior citizens,
    initiated a mid-year bonus program for its members, providing a small yet meaningful financial gift.
    This initiative was introduced in 2019 and has been embraced by the current Barangay Captain, Thomas 
    Raymond Lising, as a collaborative project between the association and the barangay council. The heartwarming sight 
    of our members' joy upon receiving their monthly bonuses underscores their importance to us.
  `;

  const section2Content = `
    We take special care to ensure that our seniors feel truly cherished on their special day. We provide a sugar-free cake 
    along with Quaker oats and biscuits as birthday treats for our senior members. Additionally, for those who prefer a different
    option, we are more than happy to arrange a fruit basket. Our commitment is to fulfill our members' needs and make their special 
    day truly extraordinary.
  `;

  const section3Content = `
    There are indeed people who are financially struggling in life, which is why the association decided to create a project for senior
    members who are less fortunate. This is a project where the association provides monthly financial assistance to indigent members. This
    project has also been adopted by the current Barangay Captain, Thomas Raymond Lising. He may have recognized the needs of impoverished senior
    citizens, including their necessities such as food, medicine, and more. While the amount given to them each month may not be substantial, what's
    important is that there are people willing to help meet their needs.
  `;

  const section4Content = `
    Due to pandemic, we couldn't have our usual gatherings, so our senior members missed their cherished Christmas party. However,
    this challenge sparked a heartwarming solution: we turned the party budget into 500-peso cash gifts for each senior member every December. This gesture
    aimed to ensure they didn't miss out on holiday joy, turning this project into an annual tradition spreading happiness during Christmas, even in tough times.
  `;

  return (
    <div className="w-100% mt-12 my-10">
      <div className="flex flex-1 justify-start items-center flex-col">
        <div className="font-bold text-2xl uppercase tracking-wide text-blue-900">
          <h1>Brgy. San Antonio</h1>
        </div>
        
        <h2 className='uppercase text-blue-950 text-lg ml-5 font-semibold mt-5'>To qualify for the benefits from Barangay San Antonio, you need to:</h2>   
          <ul>
            <li className='ml-2 text-lg'>1. Must be a resident of Barangay San Antonio.</li>
            <li className='ml-2 text-lg'>2. Must need to have a senior citizen ID.</li>
            <li className='ml-2 text-lg'>3. Must also be a registered voter of Barangay San Antonio, Pasig City.</li>
          </ul>

          <div className="w-full lg:w-10/12 p-5 mt-5">
            <h1 className="lg:ml-1 md:w-10/12 text-xl font-semibold uppercase py-2">
              1. mid-year bonus for senior citizen members
            </h1>
            <ExpandableSection
              content={section1Content}
              isExpanded={section1Expanded}
              toggleExpand={() => setSection1Expanded(!section1Expanded)}
            />
          </div>
          <div className="w-full lg:w-10/12 p-5">
            <h1 className="lg:ml-1 text-xl font-semibold uppercase py-2">
              2. Birthday present
            </h1>
            <ExpandableSection
              content={section2Content}
              isExpanded={section2Expanded}
              toggleExpand={() => setSection2Expanded(!section2Expanded)}
            />
          </div>
          <div className="w-full lg:w-10/12 p-5">
            <h1 className="lg:ml-1 text-xl font-semibold uppercase py-2">
              3. Senior Pensioner
            </h1>
            <ExpandableSection className="text-lg"
              content={section3Content}
              isExpanded={section3Expanded}
              toggleExpand={() => setSection3Expanded(!section3Expanded)}
            />
          </div>
          <div className="w-full lg:w-10/12 p-5">
            <h1 className="lg:ml-1 text-xl font-semibold uppercase py-2">
              4. Christmas Cash-gift
            </h1>
            <ExpandableSection
              content={section4Content}
              isExpanded={section4Expanded}
              toggleExpand={() => setSection4Expanded(!section4Expanded)}
            />
          </div>       
      </div>
    </div>
  );
}
