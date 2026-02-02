import Image from "next/image";
import Warning from "@/public/Box_Important.svg";
import SalaryMan from "@/public/Salary_male.svg";
import Target from "@/public/Target_Weld.svg";
import GalleryGrid from "./galleryGrid";
import { Feeinfo } from "@/data/feeinfo";

const Gallery = () => {
  return (
    <div className="mt-40 grid w-5/6 grid-cols-2 justify-self-center">
      <div className="col-start-2 row-start-1 mb-6 flex w-5/8 flex-col items-center justify-end gap-4 justify-self-center text-center">
        <p className="text-archery-grey-400 mb-6 text-5xl leading-14 font-bold">
          Everything you need to know about joining!
        </p>
        <Image src={Warning} alt="Warning" className="mt-8 object-cover" />
        <p className="text-2xl text-red-700">members must be UCR students</p>
      </div>
      <div className="row-span-2 row-start-1">
        <GalleryGrid />
      </div>
      <div className="col-start-2 row-span-1 row-start-2 w-3/4 flex-col justify-self-center text-center">
        <div className="my-8 flex items-center justify-center gap-4">
          <Image
            src={SalaryMan}
            alt="Membership Fee"
            className="justify-self-center object-cover"
          />
          <p className="text-archery-grey-400 text-5xl font-bold">
            Membership Fee
          </p>
        </div>
        <div className="flex w-7/8 flex-col gap-8 justify-self-end">
          <div className="flex items-start">
            <Image
              src={Target}
              alt="Bullet Point 1"
              className="mx-8 w-12 object-cover"
            />
            <p className="text-archery-grey-400 mt-1 w-2/3 text-start text-2xl">
              {" "}
              <span className="font-bold">$75</span> yearly fee OR{" "}
              <span className="font-bold">$45</span> quarterly fee (only offered
              winter and spring quarters)
            </p>
          </div>
          <div className="flex items-start">
            <Image
              src={Target}
              alt="Bullet Point 2"
              className="mx-8 w-12 object-cover"
            />
            <p className="text-archery-grey-400 mt-1 text-2xl font-bold">
              Covers
            </p>
          </div>
        </div>
        <div className="mr-8 flex w-5/8 flex-col gap-6 justify-self-end text-start">
          {Feeinfo.map(({ title, details }, index) => (
            <p key={index} className="text-archery-grey-400 text-2xl">
              <span className="underline">{title}</span>
              {details}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
