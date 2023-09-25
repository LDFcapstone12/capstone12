import React from 'react';
import Link from 'next/link';

const Seminaritem = () => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#affd2d] to-[#cbf090]">
    <img className="rounded-xl group-hover:opacity-10" src="/assets/projects/Seminar.png" 
    alt="" />
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h3 className="text-2xl text-gray-700 tracking-wider font-bold text-center">Container Gardening Seminar</h3>
      <p className="pb-4 pt-2 text-gray-700 text-center">September 16, 2023</p>
      <Link href='/activities/Seminar'>
      <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">See More</p></Link>
    </div>
  </div>
  )
}

export default Seminaritem