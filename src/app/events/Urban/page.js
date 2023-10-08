import Image from "next/image";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: 'Container Gardening : BSA Senior Citizens Association',
};

export default function Urban() {
  return (
    <div className="w-full lg:items-center gap-10 mt-5 p-6">
      <h1 className="lg:ml-1 text-2xl text-center font-bold uppercase py-2">
        SENIOR CITIZENS&apos; CONTAINER GARDENING PROJECT
      </h1>
      <div className="border shadow-lg rounded-xl shadow-gray-500">
        <Image
          src="/assets/news/Container.png"
          width="700"
          height="300"
          alt="Validation"
          className="mx-auto mb-4 lg:mb-3"
        />
      <p className="w-10/12 text-lg text-justify mt-10 mx-auto">
        Urban gardening has become a vital and sustainable solution to address food security and environmental concerns
        in the Philippines. As the country&apos;s population continues to grow and urbanize, there is an increasing need to find
        innovative ways to produce food locally and reduce the strain on rural agricultural resources. Urban gardening 
        offers a promising avenue for individuals and communities to contribute to food production, foster self-sufficiency, and
        create green, livable cities.
      </p>

      <p className="w-10/12 text-lg text-justify mt-5 mx-auto">In cooperation with the city administration, Office of the Senior Citizens
      Affairs (OSCA), and the senior citizens federation, a seminar was organized focusing on urban gardening and food production.
      This event was designed to mark the commencement of a project aimed at involving senior citizens from all across Pasig.
      To make it more engaging, each association will nominate a representative to take part in this contest. Notably, this initiative
      has garnered support from various quarters, including Mayor Vico Sotto, OSCA, the Barangay Council, and the Senior Association.</p>
      
      <p className="w-10/12 text-lg text-justify mt-5 mx-auto">Given that Barangay San Antonio primarily consists of buildings with limited
      availbale land for traditional gardening, a seminar was specifically conducted on container gardening. This approach was chosen due to its 
      suitability for Barangay San Antonio&apos;s unique conditions and to allow them to participate in the urban gardening contest organized by the city
      government. This opportunity is open to all senior citizens residing in Barangay San Antonio. We intend to create a group that will actively participate
      in the contest.</p>

      <p className="w-10/12 text-lg text-justify mt-5 mx-auto">To facilitate this endeavor, Kagawad Justin Galang of Barangay San Antonio has generously
      offered to provide all the necessary tools and resources for the contest.</p>
      
      <p className="w-10/12 text-lg text-justify mt-5 mx-auto mb-5">If your are a senior citizen interested in joining the contest, kindly get in touch with 
      <span className="font-semibold"> Leah Florencio at 0967-2773468.</span> </p>
      <div className="flex justify-center px-3 py-5"> 
      <Link href='/events'>
          <p className="underline tracking-widest rounded-full bg-[#affd2d] px-7 py-2 hover:scale-110 ease-in duration-300 cursor-pointer uppercase text-lg font-semibold">Back</p>
      </Link> 
      </div>
      </div>  
      
    </div> 
  );
}
