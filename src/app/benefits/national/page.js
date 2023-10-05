"use client";
import React, { useState } from 'react';

const paragraphStyles = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
}

export default function National() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-100% mt-12 my-10">
            <div className="flex flex-1 justify-start items-center flex-col gap-6">
                <div className="font-bold text-2xl uppercase tracking-wide text-blue-900">
                    <h1>NATIONAL GOVERNMENT BENEFITS</h1>
                </div>
                <p className='w-full lg:w-1/2 text-lg text-justify'>According to Republic Act 994, individuals in the Philippines who are 60 years old and above are
                    eligible for a 20% discount and are also exempt from the value-added tax (VAT) on eligible goods
                    and services that are intended for their personal use. These benefits are applicable to both cash and 
                    credit card transactions.
                </p>
                <div className="w-full lg:w-1/2">
                    <h1 className="lg:ml-1 text-xl font-semibold uppercase py-2">
                        1. MEDICAL EXPENSES DISCOUNT
                    </h1>
                    <p className="text-justify text-lg" style={isOpen ? null : paragraphStyles}>
                        Pharmacies, hospitals, and healthcare facilities in the Philippines make significant efforts to provide
                        senior citizens with the 20% discount they are entitled to. This enables seniors to access the healthcare they
                        require without straining their finances, provided they meet the necessary criteria for senior citizen health 
                        benefits.
                        <p className="text-justify text-lg" >
                        The discount, coupled with the exemption from value-added tax (VAT), is applicable to a wide range of medical essentials
                        for senior citizens. This includes a 20% reduction when purchasing both generic and branded medications, as well as savings on 
                        eyeglasses, hearing aids, wheelchairs, dentures, medical procedures, examinations, and other healthcare-related expenses.
                        </p>
                        <p className="text-justify text-lg" >
                        It&apos;s worth noting that senior citizens can avail of these discounts on medicines and hospital bills, whether they make
                        their purchases in physical stores or through online transactions in the Philippines.
                        </p>

                        <h2 className='my-3 uppercase text-blue-950 font-semibold'>To access the Senior Citizen Discount for medical expenses in the Philippines, follow these steps:</h2>
                            <p>1. When purchasing medicines and other elderly care items from physical pharmacies:</p>    
                                <li className='ml-5'>Ensure you have your senior citizen ID, Office of the Senior Citizen Affairs (OSCA) purchase booklet, and prescription slips with you.</li>
                                <li className='ml-5'>In the case of online purchases, take a screenshot of the required documents and upload them onto the merchant&apos;s platform</li>
                                
                            <p>2. When undergoing medical procedures at clinics and hospitals:</p>    
                                <li className='ml-5'>Present your senior ID, OSCA purchase booklet, along with any other pertinent medical documents when settling your bill.</li>  
                    </p>      
                    <button className='mt-3 py-1 p-3 border bg-blue-800 text-white font-semibold' onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'READ LESS...' : 'READ MORE...'}
                    </button>  
                </div>

                <div className="w-full lg:w-1/2">
                    <h1 className="lg:ml-1 text-xl font-semibold uppercase py-2">
                        2. Utility Bills Discount
                    </h1>
                    <p className="text-justify text-lg" style={isOpen ? null : paragraphStyles}>
                        Additionally, senior citizens have the opportunity to access discounts on their utility bills when the discounts
                        are registered in their names. As long as the household&apos;s consumption remains below 100 kWh of electricity and 30
                        cubic meters of water, a 5% discount can be applied to both electric and water bills.

                        <h2 className='my-3 uppercase text-blue-950 font-semibold'>To access the Senior Citizen Discount on electric and utility bills, follow these steps:</h2>
                            <p>1. When making payments at the closest payment center:</p>    
                                <li className='ml-5'>Ensure you have your senior citizen ID readily available.</li>
                                <li className='ml-5'>Present the utility bill registered under the senior citize&apos;s name.</li> 
                                <li className='ml-5'>Provide any additional documentation that serves as proof of address as necessary.</li> 
                    </p>      
                    <button className='mt-3 py-1 p-3 border bg-blue-800 text-white font-semibold' onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'READ LESS...' : 'READ MORE...'}
                    </button>  
                </div>

                <div className="w-full lg:w-1/2">
                    <h1 className="lg:ml-1 text-xl font-semibold uppercase py-2">
                        3. Discount on Groceries
                    </h1>
                    <p className="text-justify text-lg" style={isOpen ? null : paragraphStyles}>
                        Senior citizens in the Philippines have the opportunity to enjoy a unique 5% discount on selected grocery items,
                        which is granted without the exemption of Value-Added Tax (VAT). This benefit is the result of a collaborative initiative
                        between the Department Social Welfare and Development (DSWD) and the Department of Agriculture (DOA), established through Joint Administrative
                        Order No. 10-02, issued in 2010.

                        <h2 className='my-3 uppercase text-blue-950 font-semibold'>Senior citizens who make grocery purchases totaling up to P1,300 per week are entitled to a 5% discount
                        on their retail prices of a range of essential items, including but not limited to:</h2>   
                                <li className='ml-5'>Rice, bread, and corn</li>
                                <li className='ml-5'>Chicken, beef, and pork (fresh, canned, and processed)</li> 
                                <li className='ml-5'>Fresh eggs</li> 
                                <li className='ml-5'>Coffee, creamer, and sugar</li> 
                                <li className='ml-5'>Fresh fruits and vegetables</li> 
                                <li className='ml-5'>Garlic and onions</li> 
                                <li className='ml-5'>Cooking oil and salt</li> 
                                <li className='ml-5'>Noodles, canned sardines, and canned tuna</li> 
                                <li className='ml-5'>Fresh milk and other dairy products</li> 
                                <li className='ml-5'>Detergents</li> 
                                <li className='ml-5'>Electrical supplies, light bulbs, and batteries</li> 
                                <li className='ml-5'>Geriatric diapers</li> 

                            <h2 className='my-3 uppercase text-blue-950 font-semibold'>To access the Grocery discount for Senior Citizens, follow these steps:</h2>
                                <p>1. When shopping for groceries at supermarkets, convenience stores, and drug stores:</p>    
                                <li className='ml-5'>Seniors should carry their OSCA-issued senior citizen ID and OSCA purchase booklet.</li>
                                <li className='ml-5'>If you are shopping on behalf of a senior family member, provide their senior citizen ID, OSCA booklet, along with an authorization letter to claim the 5%.</li> 
                                <li className='ml-5'>Provide any additional documentation that serves as proof of address as necessary.</li>   
                                <p>2. It&apos;s important to note that the discount is applicable for both in-store and online purchases.</p>   
                                <p>3. Please be aware that the special discount does not apply to purchases made at sari-sari stores, cooperative stores, wet markets, and talipapa.</p>            
                    </p>      
                    <button className='mt-3 py-1 p-3 border bg-blue-800 text-white font-semibold' onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'READ LESS...' : 'READ MORE...'}
                    </button>  
                </div>

                <div className="w-full lg:w-1/2">
                    <h1 className="lg:ml-1 text-xl font-semibold uppercase py-2">
                        4. Discount on Dining Transactions
                    </h1>
                    <p className="text-justify text-lg" style={isOpen ? null : paragraphStyles}>
                        When taking your parents or grandparents out for a meal, it&apos;s essential to keep in mind that senior citizens in the Philippines are eligible for a 20% discount at 
                        various restaurants and well-known fast-food chains, including Jollibee, McDonalds, KFC, Greenwich, and Mang Inasal. Additionally, they can also apply the senior citizen
                        discount to food delivery apps such as GrabFood and Foodpanda, among others. This benefit allows seniors to enjoy dining out or ordering in with more affordability and convenience.

                        <h2 className='my-3 uppercase text-blue-950 font-semibold'>To claim the Restaurant Discount:</h2>
                            <p>1. When dining in the restaurant:</p>    
                                <li className='ml-5'>Simply present the senior citizen&apos;s ID during the ordering or payment process.</li>
                            <p>2. For online food deliveries:</p>    
                                <li className='ml-5'>Mention the senior citizen&apos;s name and senior citizen number during the ordering process.</li>
                                <li className='ml-5'>En</li>
                    </p>      
                    <button className='mt-3 py-1 p-3 border bg-blue-800 text-white font-semibold' onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'READ LESS...' : 'READ MORE...'}
                    </button>  
                </div>
            </div>
        </div>
    )
}
