"use client";
import { useState } from 'react';

  const paragraphStyles = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
}

export default function Pasig() {
    const [isOpen, setIsOpen] = useState(false);
  

    return (
        <div className="w-100% mt-10">
            <div className="flex flex-1 justify-start items-center flex-col gap-6">
                <div className="font-bold text-2xl uppercase tracking-wide text-blue-900">
                    <h1>PASIG CITY BENEFITS</h1>
                </div>

                    <div className="w-full lg:w-1/2">
                        <h1 className="lg:ml-1 text-xl font-semibold uppercase py-2">
                            1. COMPLIMENTARY MOVIE TICKETS.
                        </h1>
                        <p className="text-justify text-lg" style={isOpen ? null : paragraphStyles}>
                            
                        </p>
                        <button className='mt-3 py-1 p-3 border bg-blue-800 text-white font-semibold' onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'READ LESS...' : 'READ MORE...'}
                        </button>       
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h1 className="lg:ml-1 text-xl font-semibold uppercase py-2">
                            2. FREE HOSPITALIZATION AND PRESCRIBED MEDICATIONS AT THE PASIG CITY GENERAL HOSPITAL.
                        </h1>
                        <p className="text-justify text-lg" style={isOpen ? null : paragraphStyles}>
                           
                        </p>
                        <button className='mt-3 py-1 p-3 border bg-blue-800 text-white font-semibold' onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'READ LESS...' : 'READ MORE...'}
                        </button>  
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h1 className="lg:ml-1 text-xl font-semibold uppercase py-2">
                            3. ACCESS TO FREE ANTI-PNEUMONIA AND ANTI-FLU VACCINES.
                        </h1>
                        <p className="text-justify text-lg" style={isOpen ? null : paragraphStyles}>
                          
                        </p>
                        <button className='mt-3 py-1 p-3 border bg-blue-800 text-white font-semibold' onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'READ LESS...' : 'READ MORE...'}
                        </button>  
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h1 className="lg:ml-1 text-xl font-semibold uppercase py-2">
                            4. GENEROUS FINANCIAL INCENTIVES OF P10,000 FOR THOSE AGED 90-94 AND P20,000 FOR SENIOR CITIZENS AGED 95-100.
                        </h1>
                        <p className="text-justify text-lg" style={isOpen ? null : paragraphStyles}>
                           
                        </p>
                        <button className='mt-3 py-1 p-3 border bg-blue-800 text-white font-semibold' onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'READ LESS...' : 'READ MORE...'}
                        </button>  
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h1 className="lg:ml-1 text-xl font-semibold uppercase py-2">
                            5. A YEAR-END CASH GRANT OF P3,000 FOR SENIOR CITIZENS WHO HAVE MAINTAINED THEIR STATUS AS REGISTERED VOTERS FOR AT LEAST TWO YEARS.
                        </h1>
                        <p className="text-justify text-lg" style={isOpen ? null : paragraphStyles}>
                            To acknowledge and appreciate the significant contribution made by senior citizens to our society, as well as 
                            to encourage civic participation, an innovative program has been launched. This program entails granting a year-end
                            cash subsudy of P3,000 to senior citizens who have been consistently upheld their registration as voters for at least 
                            two years. It underscores our dedication to fostering a society where all citizens, regardless of their age, experience a 
                            sense of worth and inclusion in the democratic system.
                            <h2 className='my-3 uppercase text-blue-950 font-semibold'>Requirements:</h2>
                            <li className='ml-5'>Landbank Application Form</li>
                            <li className='ml-5'></li>
                            <li className='ml-5'></li>
                            <li className='ml-5'></li>
                        </p>
                        <button className='mt-3 py-1 p-3 border bg-blue-800 text-white font-semibold' onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'READ LESS...' : 'READ MORE...'}
                        </button>  
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h1 className="lg:ml-1 text-xl font-semibold uppercase py-2">
                            6. A P5,000 BURIAL ASSISTANCE PROGRAM FOR THE FAMILIES OF DECEASED PASIG OSCA ID HOLDERS.
                        </h1>
                        <p className="text-justify text-lg" style={isOpen ? null : paragraphStyles}>
                            The P5,000 Burial Assistance Program for deceased Pasig OSCA ID holders reflects our commitment
                            to helping seniors and their families during tough times, offering financial support and easing 
                            the burden of funeral expenses.

                            <h2 className='my-3 uppercase text-blue-950 font-semibold'>Requirements:</h2>
                            <li className='ml-5'>Burial Application Form</li>
                            <li className='ml-5'></li>
                            <li className='ml-5'></li>
                            <li className='ml-5'></li>
                        </p>
                      
                        <button className='mt-3 py-1 p-3 border bg-blue-800 text-white font-semibold mb-10' onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'READ LESS...' : 'READ MORE...'}
                        </button>  
                    </div>
            </div>
        </div>
    )
}