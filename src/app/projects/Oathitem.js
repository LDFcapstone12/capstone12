import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Oathitem = () => {
  return (
    <div className="relative -order-1 flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#affd2d] to-[#cbf090]">
    <Image className="rounded-xl group-hover:opacity-10" 
    src="/assets/projects/Oath.png" 
    width={600}
    height={250}
    alt="" />
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h3 className="text-2xl text-gray-700 tracking-wider font-bold text-center">Board of Trustees Oath Taking</h3>
      <p className="pb-4 pt-2 text-gray-700 text-center">February 24, 2023</p>
      <Link href='/activities/Oath'>
      <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">See More</p></Link>
    </div>
  </div>
  )
}

export default Oathitem