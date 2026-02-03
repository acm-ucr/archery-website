import { LuTarget } from "react-icons/lu";
import Image, {/public/ClubSports.png} from "next/image";


const HowToJoin = () => {
    return (
        <div className="text-archery-grey-300 flex flex-col items-center justify-center">
            <div className="mb-5 w-1/2 max-w-xs">
                <Image src={ClubSports} alt="Club Sports Logo" className="w-full" />
            </div>
            </div>
    )
};
export default HowToJoin;