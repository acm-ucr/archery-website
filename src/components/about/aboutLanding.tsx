import Target from "@/public/Group 16.svg";
import Arrow from "@/public/Group 18.svg";
import DownButton from "@/public/Down Button.svg";
import Image from "next/image";

const AboutLanding = () => {
    return (
        <div className="flex relative items-center justify-between">
            <div className="flex-col items-start p-8 text-left mx-20 z-10">
                <p className="text-8xl font-black bg-gradient-to-r from-archery-blue-400 from-10% via-archery-yellow-300 via-60% to-archery-grey-300 to-65%
      bg-clip-text text-transparent">About Us</p>
                <p className="pt-6 text-3xl font-light">Join Archery club where recreation meets competition. From beginners to experienced archers, everyone is welcome to discover the art of archery!</p>
                <p className="pt-32 text-center font-extralight">learn more about us</p>
                <Image src={DownButton} alt="Down Button" className="w-auto pl-60" />
                
            </div>
            <Image src={Target} alt="Image of a target" className="w-1/2 z-10" />
            <Image src={Arrow} alt="Image of an arrow" className="absolute w-1/6 inset-x-267 inset-y-87 z-20" />
            <Image src={Arrow} alt="Image of an arrow" className="absolute w-1/6 inset-x-268 inset-y-90 z-20" />
            <Image src={Arrow} alt="Image of an arrow" className="absolute w-1/6 inset-x-255 inset-y-92 z-20" />

            <div className="absolute top-1/5 w-1/5 h-1/4 bg-archery-blue-100 rounded-full filter blur-3xl z-0"></div>
            <div className="absolute right-3/6 w-1/5 h-1/4 bg-archery-yellow-100 rounded-full filter blur-3xl z-0"></div>
        </div>
        
    );
};

export default AboutLanding;

