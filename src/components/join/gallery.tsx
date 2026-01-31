import React from 'react'
import Image from 'next/image'
import Warning from '@/public/Box Important.svg'
import GalleryGrid from './galleryGrid';

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 relative justify-self-center items-center mt-40 w-5/6 ">
      <div className="flex-col justify-self-center items-center relative text-center col-start-2 row-start-1  w-3/4">
        <p className="text-archery-grey-400 font-bold text-5xl text-pretty mb-10">Everything you need to know about joining!</p>
        <Image src={Warning} alt="" className=" justify-self-center"/>
        <p className="text-red-700 text-xl">members must be UCR students</p>
      </div>
      <div className="row-start-1 row-span-3">
        <GalleryGrid />
      </div>
      <div className="flex-col justify-self-center text-center col-start-2 w-3/4 row-span-1 row-start-2">
        <p className="text-archery-grey-400 font-bold text-5xl">Membership Fee</p>
        <div className="flex justify-center items-center">
          <p className="text-archery-grey-400 text-2xl"> <span className="font-bold">$75</span> yearly fee OR <span className="font-bold">$45</span> quarterly fee (only offered winter and spring quarters)</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-archery-grey-400 text-2xl font-bold">Covers</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-archery-grey-400 text-2xl"> <span className="underline">Equipment</span> : bows, arrows, targets, safety equipment</p>
          <p className="text-archery-grey-400 text-2xl"> <span className="underline">Coaching</span> : USA Archery Lv.2 certified coaches and officers</p>
          <p className="text-archery-grey-400 text-2xl"> <span className="underline">Competitions</span> : first qualifier, finals or nationals</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery