import { RiNotification4Fill } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import admin from "../../../Assets/image/userImage/84.jpg";
import { FiStar } from "react-icons/fi";

const SNotificationPhone = () => {
	return (
		// section notification for phone and tablet
		<nav className="lg:hidden w-full h-full flex justify-center items-center md:justify-end">
			<nav className="w-full md:w-3/4 h-2/3 md:h-4/5 flex justify-end items-center">
				<button className="hidden lg:block">
					<FiStar className="text-yellow-400"/>
					<p></p>
				</button>
				{/* section admin */}
				<button className="border-2 border-dashed border-white border-opacity-40 rounded-full w-1/3 h-full md:h-11/12 md:w-30% grid place-items-center">
					<img src={admin} alt="admin" className="w-4/5 h-90% md:w-90% md:h-full rounded-full" />
				</button>
				{/* section notification */}
				<button className="w-1/3 h-full flex justify-center items-center ">
					<RiNotification4Fill className="text-2xl text-white text-opacity-40" />
					<nav className="h-2 w-2 bg-red-500 border-2 border-black-2 rounded-full relative right-2 bottom-2"></nav>
				</button>
				{/* hamburger menu */}
				<button className="w-30% h-full grid place-items-center lg:hidden">
					<HiMenuAlt3 className="text-3xl text-white text-opacity-40" />
				</button>
			</nav>
		</nav>
	);
};

export default SNotificationPhone;
