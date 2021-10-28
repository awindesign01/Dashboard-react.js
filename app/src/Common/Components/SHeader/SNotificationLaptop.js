import { RiNotification4Fill } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import admin from "../../../Assets/image/userImage/84.jpg";
import { FiStar } from "react-icons/fi";

const SNotificationLaptop = () => {
	return (
		// section notification for tablet and desktop
		<nav className="w-60% h-full flex justify-around items-center">
			<button className="w-25% h-10 border-2 border-yellow-400 rounded-lg flex justify-center items-center">
            <FiStar className="text-yellow-400 text-xl"/>
            <p className="text-white text-xs xl:text-sm font-bold tracking-wider">Premium</p>
         </button>
         <button className="p-1 w-1/2 xl:w-1/3 h-full flex justify-evenly items-center">
            <img src={admin} alt="admin" className="max-w-2/3 h-2/3 rounded-full border-2 border-dashed border-white border-opacity-40"/>
            <p className="text-white font-bold tracking-wider">ali</p>
            <IoIosArrowDown className="text-white text-xl"/>
         </button>
         <button className="w-1/5 xl:w-1/6 h-full flex justify-end items-center">
            <RiNotification4Fill className="text-2xl text-white text-opacity-40"/>
            <nav className="h-2 w-2 bg-red-500 border-2 border-black-2 rounded-full relative right-2 bottom-2 animate-bounce"></nav>
         </button>
		</nav>
	);
};

export default SNotificationLaptop;
