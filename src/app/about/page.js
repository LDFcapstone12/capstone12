import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsChevronDoubleUp } from "react-icons/bs";

export const metadata = {
  title: 'About Us : BSA Senior Citizens Association',
};

export default function AboutUs() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-3 py-8 md:py-16">
      <div className="flex flex-1 justify-start items-center flex-col">
      <h1 className="text-xl lg:text-2xl tracking-wider font-bold uppercase text-blue-900 text-center"> 
        about us
      </h1>
      <p className="text-xl tracking-widest font-semibold">History</p>
      <div className="max-w-[1240px] mx-auto md:py-5">    
          <p className="py-4 font-serif lg:text-xl text-lg tracking-wide text-justify">The Senior Citizens Association has a rich
          history dating back to the 1990s when it was founded under the dedicated leadership of the late Barangay
          Captain Gregorio Rupisan. Captain Rupisan played a pivotal role in its establishment, providing an initial
          budget of ten thousand pesos to kickstart the association. Over the years, the leadership was passed to 
          Kagawad Jean Ortiz, followed by President Collette Ferrer, and currently, President Josie Macapagal, who also
          holds the esteemed position of Federation President for Pasig City.</p>
          <p className="py-4 font-serif lg:text-xl text-lg tracking-wide text-justify"> The association&apos;s office is conveniently located on the 2nd floor of the Barangay Hall at #7 Gen. Malvar St.,
            Brgy. San Antonio Village, Pasig City. The current Barangay Captain, Thomas Raymond Lising, has been exceptionally
            suuportive of the association&apos;s plans, projects, and activities. He recognizes the dedication of the officers and their
            commitment to assisting members, brimming with innovative ideas on how to better reach and serve their members.
          </p>
          <p className="py-4 font-serif lg:text-xl text-lg tracking-wide text-justify"> Furtheremore, for the year 2023, the association has secured a budget of 1 million pesos for various signed 
            projects and activities, demonstrating its commitment to improving the lives of senior citizens in the community.
          </p>
               
        <div className="flex flex-1 justify-start items-center flex-col gap-6">
          <h2 className="font-bold mt-5 text-2xl uppercase tracking-wide text-blue-900">Vision and Mission</h2>
            <p className="text-xl tracking-widest font-semibold">Vision</p>
            <p className="py-4 font-serif lg:text-xl text-lg tracking-wide text-justify">A City for all ages where the senior citizens are empowered to achieve active ageing.</p>
            <p className="text-xl tracking-widest font-semibold">Mission</p>
            <p className="py-4 font-serif lg:text-xl text-lg tracking-wide text-justify">Promotion of active ageing, through social protection and support for the rights
            and welfare of senior citizens and their empowerment by developing policies, programs, projects and services implemented with or 
            through Local Government Units, Non-Government Organizations, People&apos;s Organizations, National Government Agencies and other members of 
            civil society.</p>
        </div>           
        </div>
        <div className="max-w-[1240px] mx-auto md:py-5">
            <h3 className="font-bold text-2xl uppercase text-center tracking-wide text-blue-900">Board of Trustees</h3>
            <p className="text-center uppercase font-semibold text-lg">The team behind the Senior Citizens Association</p>
            <p className="text-center font-semibold text-xl mt-5">Executive Committee</p>
            <div className="grid place-items-center mt-5">
              <Image src="/assets/bot/Pres.png" 
              alt="President&apos;s Image"
              width="289"
              height="150" />
            
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 h-auto gap-10 p-5">
                  <Image src="/assets/bot/VP.png" 
                  width="289"
                  height="150"
                  alt="Vice President&apos;s Image" />

                  <Image src="/assets/bot/Sec.png" 
                  width="289"
                  height="150"
                  alt="Secretary&apos;s Image" />

                  <Image src="/assets/bot/Treas.png" 
                  width="289"
                  height="150"
                  alt="Treasurer&apos;s Image" />

                  <Image src="/assets/bot/Audi.png" 
                  width="289"
                  height="150"
                  alt="Auditor&apos;s Image" />
              </div>
            </div>

            <h4 className="text-center font-semibold text-xl mt-5">Board Member</h4>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 gap-10 p-5">
                <Image src="/assets/bot/BM4.png" 
                width="289"
                height="150"
                alt="Board Member 1&apos;s Image" />

                <Image src="/assets/bot/BM5.png" 
                width="289"
                height="150"
                alt="Board Member 2&apos;s Image" />

                <Image src="/assets/bot/BM6.png" 
                width="289"
                height="150"
                alt="Board Member 3&apos;s Image" />

                <Image src="/assets/bot/BM3.png" 
                width="289"
                height="150"
                alt="Board Member 4&apos;s Image" />

                <Image src="/assets/bot/BM1.png" 
                width="289"
                height="150"
                alt="Board Member 5&apos;s Image" />

                <Image src="/assets/bot/BM2.png" 
                width="289"
                height="150"
                alt="Board Member 6&apos;s Image" />
              </div>
            </div>   

            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-10 p-5">
                <Image src="/assets/bot/AS1.png" 
                width="289"
                height="150"
                alt="Admin Staff 1&apos;s Image" />

                <Image src="/assets/bot/AS2.png" 
                width="289"
                height="150"
                alt="Admin Staff 2&apos;s Image" />
              </div>
              
            </div>   
            <div className="flex justify-center py-12">
              <Link href='/about' >
              <div className="rounded-full font-black bg-[#affd2d] hover:scale-110 ease-in duration-300 p-3 cursor-pointer">
                <BsChevronDoubleUp className="m-auto" size={25} />
              </div>
              </Link>
            </div> 
          </div> 
        </div>
      </div>
    </section>
  );
}
