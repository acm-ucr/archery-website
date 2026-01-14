import Image from "next/image"
import Background from "@/public/headerBackground.webp"

const Header = () => {
  return (
    <div className="relative w-full h-full">
        <Image src = {Background} alt = "Background" className="w-full h-full object-cover"/>
        <div className="flex justify-center items-center absolute bg-white/85 inset-0" />
        <div className="flex flex-col justify-center items-center absolute text-center text-8xl font-extrabold inset-0">
        <p className="text-archery-grey-300">Join</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-archery-yellow-300 to-archery-blue-300">Archery @UCR</p>
        </div>
    </div>
  )
}

export default Header