import React from 'react'
import Image from 'next/image'
import Warning from '@/public/Box Important.svg'
import SalaryMan from '@/public/Salary_male.svg'
import Target from '@/public/Target_Weld.svg'
import GalleryGrid from './galleryGrid';

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 relative  justify-self-center mt-40 w-5/6 ">
      <div className="flex flex-col justify-self-center items-center text-center col-start-2 row-start-1 w-5/8  gap-4 justify-end mb-6">
        <p className="text-archery-grey-400 font-bold text-5xl  mb-8">Everything you need to know about joining!</p>
        <Image src={Warning} alt="" className="object-cover  border-black mt-8"/>
        <p className="text-red-700 text-2xl  ">members must be UCR students</p>
      </div>
      <div className="row-start-1 row-span-2  ">
        <GalleryGrid />
      </div>
      <div className="flex-col justify-self-center text-center col-start-2 w-3/4 row-span-1 row-start-2  ">
        <div className="flex items-center justify-center my-8">
          <Image src={SalaryMan} alt="" className="object-cover justify-self-center"/>
          <p className="text-archery-grey-400 font-bold text-5xl">Membership Fee</p>
        </div>
        <div className="w-7/8 flex flex-col justify-self-end gap-8">
          <div className="flex items-start ">
            <Image src={Target} alt="" className="object-cover  w-12 border-black mx-8"/>
            <p className="text-archery-grey-400 text-2xl text-start w-2/3 mt-1"> <span className="font-bold">$75</span> yearly fee OR <span className="font-bold">$45</span> quarterly fee (only offered winter and spring quarters)</p>
            
          </div>
          <div className="flex items-start">
            <Image src={Target} alt="" className="object-cover w-12 border-black mx-8"/>
            <p className="text-archery-grey-400 text-2xl font-bold mt-1">Covers</p>
          </div>
        </div>
        <div className="flex flex-col w-5/8 text-start justify-self-end mr-8 gap-6">
          <p className="text-archery-grey-400 text-2xl"> <span className="underline">Equipment</span> : bows, arrows, targets, safety equipment</p>
          <p className="text-archery-grey-400 text-2xl"> <span className="underline">Coaching</span> : USA Archery Lv.2 certified coaches and officers</p>
          <p className="text-archery-grey-400 text-2xl"> <span className="underline">Competitions</span> : first qualifier, finals or nationals</p>
        </div>
        
      </div>
    </div>
  );
};

export default Gallery