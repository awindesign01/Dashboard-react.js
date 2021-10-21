import { RiNotification4Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
// import { FiUser } from "react-icons/fi";
import admin from "../../../Assets/image/userImage/84.jpg";
import { FaStar } from "react-icons/fa";

const SNotification = () => {
	return (
		<nav className="pr-1 w-3/5 h-full flex justify-end items-center">
			<button className="w-28 h-10 bg-black-1 border-2 border-opacity-40 rounded-xl flex justify-center items-center">
				<FaStar  className="text-yellow-300 text-lg"/>
				<p className="ml-1 text-yellow-300 font-bold">Premium</p>
			</button>
			<button className="w-1/4 h-10 flex justify-around items-center">
				{/* <nav className="fixed h-72 w-52 top-16 bg-white">

				</nav> */}
				<img
					src={admin}
					alt="admin"
					className="h-10 w-10 text-white text-opacity-70 text-3xl border-2 rounded-full border-opacity-40"
				/>
				<p className="text-white text-opacity-90 font-bold">Thomas</p>
				<button>
					<IoIosArrowDown className="text-white text-opacity-40" />
				</button>
			</button>
			<nav className="w-1/6 h-10 grid place-items-center">
				<button>
					<RiNotification4Fill className="text-xl text-white text-opacity-40" />
				</button>
			</nav>
		</nav>
	);
};

export default SNotification;
