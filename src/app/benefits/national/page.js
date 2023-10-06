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

export default function National() {
  const [section1Expanded, setSection1Expanded] = useState(false);
  const [section2Expanded, setSection2Expanded] = useState(false);
  const [section3Expanded, setSection3Expanded] = useState(false);
  const [section4Expanded, setSection4Expanded] = useState(false);
  const [section5Expanded, setSection5Expanded] = useState(false);
  const [section6Expanded, setSection6Expanded] = useState(false);




  const section1Content = `
    Pharmacies, hospitals, and healthcare facilities in the Philippines make significant efforts to provide
    senior citizens with the 20% discount they are entitled to. This enables seniors to access the healthcare they
    require without straining their finances, provided they meet the necessary criteria for senior citizen health benefits.
    The discount, coupled with the exemption from value-added tax (VAT), is applicable to a wide range of medical essentials
    for senior citizens. This includes a 20% reduction when purchasing both generic and branded medications, as well as savings on 
    eyeglasses, hearing aids, wheelchairs, dentures, medical procedures, examinations, and other healthcare-related expenses.
    It's worth noting that senior citizens can avail of these discounts on medicines and hospital bills, whether they make
    their purchases in physical stores or through online transactions in the Philippines.
  `;

  const section2Content = `
    Additionally, senior citizens have the opportunity to access discounts on their utility bills when the discounts
    are registered in their names. As long as the households consumption remains below 100 kWh of electricity and 30
    cubic meters of water, a 5% discount can be applied to both electric and water bills.
  `;

  const section3Content = `
    Senior citizens in the Philippines have the opportunity to enjoy a unique 5% discount on selected grocery items,
    which is granted without the exemption of Value-Added Tax (VAT). This benefit is the result of a collaborative initiative
    between the Department Social Welfare and Development (DSWD) and the Department of Agriculture (DOA), established through Joint Administrative
    Order No. 10-02, issued in 2010. Senior citizens who make grocery purchases totaling up to P1,300 per week are entitled to a 5% discount
    on their retail prices of a range of essential items, including but not limited to: Rice, bread, corn, chicken, beef, pork (fresh, canned, and processed),
    fresh eggs, coffee, creamer, sugar, fresh fruits, vegetables, garlic, onions, cooking oil, salt, noodles, canned sardines, canned tuna, fresh milk,
    dairy products, detergents, electrical supplies, light bulbs, batteries, and geriatric diapers.
  `;

  const section4Content = `
    When taking your parents or grandparents out for a meal, it's essential to keep in mind that senior citizens in the Philippines are eligible for a 20% discount at 
    various restaurants and well-known fast-food chains, including Jollibee, McDonalds, KFC, Greenwich, and Mang Inasal. Additionally, they can also apply the senior citizen
    discount to food delivery apps such as GrabFood and Foodpanda, among others. This benefit allows seniors to enjoy dining out or ordering in with more affordability and convenience.
  `;

  const section5Content = `
  When organizing a domestic trip with your senior citizen family members, it's important to be aware of the benefits available to you. You can take advantage of a 20% senior citizen discount and a VAT exemption 
  for online bookings, making your travel plans more affordable and convenient. Notably, major airlines such as AirAsia, Cebu Pacific, and Philippine Airlines have been proactively offering the senior citizen 
  discount on their official websites and mobile applications since September 2017. This marks a significant improvement from the past when the discount was exclusively applicable to over-the-counter purchases 
  made at physical airline ticketing offices. This digital accessibility means that senior citizens and their families can now enjoy the cost-saving benefits of the discount without the need for in-person visits 
  to ticketing offices. It simplifies the booking process and ensures that senior citizens can travel comfortably while experiencing financial relief.
`;

const section6Content = `
Every senior citizen in the Philippines is entitled to PhilHealth coverage in medical facilities accredited by the government, as mandated by Republic Act 10645. Seniors can access medical care without needing a 
Member Data Record (MDR); they simply need to present their senior citizen ID. Furthermore, in addition to the standard 20% discount and VAT exemption applicable when admitted to private hospitals, senior citizens 
also benefit from PhilHealth coverage. Senior citizen PhilHealth members can avail themselves of essential benefits, including mandated coverage at authorized medical facilities across the country. Prior to applying
PhilHealth benefits, the 20% senior discount and VAT exemption are deducted from the total for members admitted to private hospitals. In cases where seniors utilize PhilHealth, they can also receive death benefits. 
An authorization letter is required if the pensioner cannot personally claim these benefits. The Social Security System (SSS) website provides a checklist for filing a death claim. It's important to note that 
PhilHealth plays a significant role in facilitating hospitalization benefits for senior citizens in the Philippines, ensuring their access to necessary healthcare services.
`;

  return (
    <div className="w-100% mt-12 my-10">
      <div className="flex flex-1 justify-start items-center flex-col">
        <div className="font-bold text-2xl uppercase tracking-wide text-blue-900">
          <h1>NATIONAL GOVERNMENT</h1>
        </div>
        <h2 className='w-full lg:w-10/12 text-justify text-blue-950 text-lg px-5 uppercase font-semibold mt-5'>According to Republic Act 9994, individuals in the Philippines who are 60 years old and above are
            eligible for a 20% discount and are also exempt from the value-added tax (VAT) on eligible goods and services that are intended for their personal use. These benefits are applicable to both cash and 
            credit card transactions.
        </h2>          
        <div className="w-full lg:w-10/12 p-5 mt-5">
            <h1 className="lg:ml-1 md:w-10/12 text-xl font-semibold uppercase py-2">
            1. medical expenses discount
            </h1>
            <ExpandableSection
            content={section1Content}
            isExpanded={section1Expanded}
            toggleExpand={() => setSection1Expanded(!section1Expanded)}
            />
            <h2 className='text-blue-950 text-lg font-semibold mt-5 uppercase'>To access the Senior Citizen Discount on electric and utility bills, follow these steps:</h2>   
                <ul className='border bg-gray-100 text-justify px-2 font-serif lg:text-xl text-lg tracking-wide'>
                    <li className='ml-2'>1. Seniors should carry their OSCA-issued senior citizen ID and OSCA purchase booklet.</li>
                    <li className='ml-2'>2. If you are shopping on behalf of a senior family member, provide their senior citizen ID, OSCA booklet, along with an authorization letter to claim the 5%.</li>
                    <li className='ml-2'>3. Provide any additional documentation that serves as proof of address as necessary.</li>
                    <li className='ml-2'>4. It&apos;s important to note that the discount is applicable for both in-store and online purchases.</li>
                    <li className='ml-2'>5. Please be aware that the special discount does not apply to purchases made at sari-sari stores, cooperative stores, wet markets, and talipapa.</li>
                </ul>
        </div> 

        <div className="w-full lg:w-10/12 p-5 mt-5">
            <h1 className="lg:ml-1 md:w-10/12 text-xl font-semibold uppercase py-2">
            2. utility bills discount
            </h1>
            <ExpandableSection
            content={section2Content}
            isExpanded={section2Expanded}
            toggleExpand={() => setSection2Expanded(!section2Expanded)}
            />
            <h2 className='text-blue-950 text-lg font-semibold mt-5 uppercase'>Senior citizens who make grocery purchases totaling up to P1,300 per week are entitled to a 5% discount
                        on their retail prices of a range of essential items, including but not limited to:</h2>   
                <ul className='border bg-gray-100 text-justify px-2 font-serif lg:text-xl text-lg tracking-wide'>
                    <li className='ml-2'>1. Ensure you have your senior citizen ID, Office of the Senior Citizen Affairs (OSCA) purchase booklet, and prescription slips with you.</li>
                    <li className='ml-2'>2. In the case of online purchases, take a screenshot of the required documents and upload them onto the merchant&apos;s platform</li>
                    <li className='ml-2'>3. Present your senior ID, OSCA purchase booklet, along with any other pertinent medical documents when settling your bill.</li>
                </ul>
        </div>   

         <div className="w-full lg:w-10/12 p-5 mt-5">
            <h1 className="lg:ml-1 md:w-10/12 text-xl font-semibold uppercase py-2">
            3. discount on groceries
            </h1>
            <ExpandableSection
            content={section3Content}
            isExpanded={section3Expanded}
            toggleExpand={() => setSection3Expanded(!section3Expanded)}
            />
            <h2 className='text-blue-950 text-lg font-semibold mt-5 uppercase'>To access the Grocery discount for Senior Citizens, follow these steps:</h2>   
                <ul className='border bg-gray-100 text-justify px-2 font-serif lg:text-xl text-lg tracking-wide'>
                    <li className='ml-2'>1. Ensure you have your senior citizen ID, Office of the Senior Citizen Affairs (OSCA) purchase booklet, and prescription slips with you.</li>
                    <li className='ml-2'>2. In the case of online purchases, take a screenshot of the required documents and upload them onto the merchant&apos;s platform</li>
                    <li className='ml-2'>3. Present your senior ID, OSCA purchase booklet, along with any other pertinent medical documents when settling your bill.</li>
                </ul>
        </div>   

        <div className="w-full lg:w-10/12 p-5 mt-5">
            <h1 className="lg:ml-1 md:w-10/12 text-xl font-semibold uppercase py-2">
            4. Discount on Restaurants and Hotels
            </h1>
            <ExpandableSection
            content={section4Content}
            isExpanded={section4Expanded}
            toggleExpand={() => setSection4Expanded(!section4Expanded)}
            />
            <h2 className='text-blue-950 text-lg font-semibold mt-5 uppercase'>To claim the Restaurant Discount:</h2>   
                <ul className='border bg-gray-100 text-justify px-2 font-serif lg:text-xl text-lg tracking-wide'>
                    <li className='ml-2'>1. Simply present the senior citizen&apos;s ID during the ordering or payment process.</li>
                    <li className='ml-2'>2. Mention the senior citizen&apos;s name and senior citizen number during the ordering process.</li>
                    <li className='ml-2'>3. Ensure to present the ID when your food is delivered.</li>
                </ul>
        </div> 

        <div className="w-full lg:w-10/12 p-5 mt-5">
            <h1 className="lg:ml-1 md:w-10/12 text-xl font-semibold uppercase py-2">
            5. Domestic Flights Discount
            </h1>
            <ExpandableSection
            content={section5Content}
            isExpanded={section5Expanded}
            toggleExpand={() => setSection5Expanded(!section5Expanded)}
            />
            <h2 className='text-blue-950 text-lg font-semibold mt-5 uppercase'>To Access the Domestic Flight Discount:</h2>   
                <ul className='border bg-gray-100 text-justify px-2 font-serif lg:text-xl text-lg tracking-wide'>
                    <li className='ml-2'>1. Please note that this discount exclusively pertains to regular fares for domestic flights. It does not encompass promotional fares, 
                    additional charges such as baggage fees, or apply to international flights.</li>
                    <li className='ml-2'>2. To avail of the discount, customers are required to input their senior citizen ID number during the flight booking process.</li>
                    <li className='ml-2'>3. Additionally, they must present their senior citizen ID upon check-in at the airport to confirm their eligibility for the discount.</li>
                </ul>
        </div> 

        <div className="w-full lg:w-10/12 p-5 mt-5">
            <h1 className="lg:ml-1 md:w-10/12 text-xl font-semibold uppercase py-2">
            6. philhealth benefits
            </h1>
            <ExpandableSection
            content={section6Content}
            isExpanded={section6Expanded}
            toggleExpand={() => setSection6Expanded(!section6Expanded)}
            />
            <h2 className='text-blue-950 text-lg font-semibold mt-5 uppercase'>Here are the registration procedures for PhilHealth through the local health insurance office:</h2>   
                <ul className='border bg-gray-100 text-justify px-2 font-serif lg:text-xl text-lg tracking-wide'>
                    <li className='ml-2'>1. Complete two (2) copies of the PhilHealth Member Registration Form (PMRF).</li>
                    <li className='ml-2'>2. Attach a recent 1 x 1 photo taken within the last six months.</li>
                    <li className='ml-2'>3. Present the Senior Citizens&apos; Identification Card issued by the OSCA in the city or municipality where the elderly resides, or a valid government-issued ID.</li>
                    <li className='ml-2'>4. Submit the duly accomplished PMRF.</li>
                    <li className='ml-2'>5. Await the issuance of the Member Data Record and the PhilHealth Identification Card.</li>
                </ul>
        </div>
      </div>
    </div>
  );
}
