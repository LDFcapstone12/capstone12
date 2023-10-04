import Image from "next/image";
import React from "react";

export const metadata = {
  title: 'Libreng Sine : BSA Senior Citizens Association',
};

export default function Movie() {
  return (
    <div className="w-full lg:items-center gap-10 mt-5 p-6">
      <h1 className="lg:ml-1 text-2xl text-center font-bold uppercase py-2">
        FREE MOVIE FOR SENIOR CITIZENS
      </h1>
      <div className="border shadow-lg rounded-xl shadow-gray-500">
        <img
          src="/assets/news/Movie.png"
          width="700"
          height="300"
          alt="Validation"
          className="mx-auto mb-4 lg:mb-3"
        />
      <p className="w-10/12 text-lg text-justify mt-10 mx-auto">
        The revival of this program is a direct result of the passage of Ordinance No. 72-2023 by the 11th
        City Council of Pasig. This legislative decision underscores the forward-thinking and compassionate leadership
        of Mayor Vico Sotto, who has consistently demonstrated his commitment to the welfare and contentment of Pasig's senior 
        citizens. Councilor Pao Santiago, who is entrusted with the oversight of Senior Citizens affairs, has played a pivotal role 
        in bringing this initiative back to life. The nearest screening venue for our beloved Barangay San Antonio resident is the <span className="font-bold italic text-blue-800">Estancia Mall & Ayala Malls The 30th.</span> 
      </p>
      <div className="w-10/12 text-lg text-justify mx-auto mt-5">
        <h2 className="uppercase mx-auto font-semibold underline">To participate in this fantastic opportunity, we kindly ask that you take
        note of the following guidelines:</h2>
        <p className="text-justify mt-3">
          <span className="font-semibold">1. Senior ID and Cinema Booklet:</span> We kindly request that you bring your senior citizen identification
          card along with your cinema booklet. For those who have yet obtain a cinema booklet, there is no need to worry. You can
          easily acquire one by visiting the 3rd floor of the barangay hall, where April dela Torre will be available to assist you.
        </p>
        <p className="text-justify mt-3">
          <span className="font-semibold">2. Screening Schedule:</span> It is crucial to note that each senior citizen is entitled
          to attend one movie screening every Monday. This scheduling approach has been designed to ensure that as many of our senior residents
          possible can take advantage of this wonderful opportunity.
        </p>
        <p className="text-justify mt-3">
          <span className="font-semibold">3. Movie Selection:</span> The movies available for screening during this program will be those in their 
          second week of screening. This selection encompasses a diverse array of genres to cater to various preferences.
        </p>

        <p className="text-justify mt-5">
          This initiative serves as a heartwarming reminder of our community's deep appreciation for the leisure and enjoyment of our senior citizens.
          It extends a warm invitation to take a well-deserved break, immerse oneself in the enchantment of the silver screen, and forge cherished memories with friends
          and fellow residents.
        </p>

        <p className="text-justify mt-3 mb-10">
          Let us unite in celebrating the return of free movies for our senior citizens. Your happiness and well-being remain our utmost priority,
          and we eagerly anticipate your presence at the cinema.
        </p>
      </div>  
      </div>     
    </div> 
  );
}
