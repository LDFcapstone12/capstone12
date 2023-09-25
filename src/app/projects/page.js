import React from "react";
import Link from "next/link";
import Seminaritem from "./Seminaritem";
import Fluitem from "./Fluitem";
import Teamitem from "./Teamitem";
import Oathitem from "./Oathitem";


export const metadata = {
    title: 'Services & Programs : BSA Senior Citizens Association',
  };


export default function ProjectsPage() {
    return (
      <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-4 py-8 md:py-16">
        <p className="text-xl lg:text-2xl tracking-wider font-bold uppercase text-blue-900 text-center">
          Services and Programs
        </p>
        <h2 className="text-lg italic lg:text-xl font-light py-4 text-center">
        "Join us in celebrating the wisdom and vitality of our senior community through our diverse services and programs, tailored to promote vibrant and fulfilling golden years.""
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
        <Seminaritem />
        <Fluitem />
        <Teamitem  />
        <Oathitem  />
     
      </div>
    </div>
   </div>
  )
}