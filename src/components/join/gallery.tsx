import Image from "next/image";
import Warning from "@/public/Box_Important.svg";
import SalaryMan from "@/public/Salary_male.svg";
import Target from "@/public/Target_Weld.svg";
import GalleryGrid from "./galleryGrid";
import { Feeinfo } from "@/data/feeinfo";

const Gallery = () => {
  return (
    <div className="gap-6 md:gap-0 mt-8 md:mt-20 xl:mt-40 flex flex-col items-center md:ml-8 justify-self-center md:grid w-5/6 md:w-9/10 md:grid-cols-2">
      <div className=" justify-self-center flex flex-col md:ml-8 items-center xl:gap-2 text-center md:col-start-2 md:row-start-1 w-9/10 md:w-3/5 ">
        <p className="text-archery-grey-400 text-xl xl:mb-6 xl:text-4xl xl:leading-11 font-bold">
          Everything you need to know about joining!
        </p>
        <div className="flex items-center md:flex-col gap-1 mt-4 xl:mt-6">
          <div className="w-[2.5vh] xl:w-1/12"><Image src={Warning} alt="Warning" className="object-cover" /></div>
          <p className="text-xs xl:text-xl text-red-700">members must be UCR students</p>
        </div>
      </div>
      <div className=" md:row-span-2 md:row-start-1 ">
        <GalleryGrid />
      </div>
      <div className="md:w-8/9 xl:w-3/4 flex-col items-center  justify-self-center text-center md:col-start-2 md:row-span-1 md:row-start-2">
        <div className="xl:my-8 md:my-4 flex items-center justify-center gap-2 xl:gap-4">
          <Image
            src={SalaryMan}
            alt="Membership Fee"
            className="justify-self-center w-[5vh] md:w-[6vh] lg:w-[7vh] object-cover"
          />
          <p className="text-archery-grey-400 xl:text-4xl text-xl font-bold">
            Membership Fee
          </p>
        </div>
        <div className=" flex w-7/8 ml-8 flex-col gap-4 my-4 justify-self-center md:justify-self-end">
          <div className="flex items-start">
            <Image
              src={Target}
              alt="Bullet Point 1"
              className="ml-5 mr-4 md:ml-6 md:mr-5 xl:mx-7 xl:mr-6 w-[2.5vh] object-cover"
            />
            <p className="text-archery-grey-400 xl:mt-1 md:w-2/3 text-start text-xs xl:text-xl">
              {" "}
              <span className="font-bold">$75</span> yearly fee OR
              <span className="font-bold"> $45</span> quarterly fee (only offered
              winter and spring quarters)
            </p>
          </div>
          <div className="flex items-start">
            <Image
              src={Target}
              alt="Bullet Point 2"
              className="ml-5 mr-4 md:ml-6 md:mr-5 xl:mx-7 xl:mr-6 w-[2.5vh] object-cover"
            />
            <p className="text-archery-grey-400 xl:mt-1 xl:text-xl text-xs font-bold">
              Covers
            </p>
          </div>
        </div>
        <div className="ml-21   xl:ml-26 mt-4 flex w-7/10 md:w-5/8 flex-col gap-4 xl:gap-4 justify-self-center text-start">
          {Feeinfo.map(({ title, descriptions }, index) => (
            <p key={index} className="text-archery-grey-400 xl:text-xl text-xs">
              <span className="underline">{title}</span>
              {descriptions}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
