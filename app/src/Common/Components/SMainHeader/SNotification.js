import { RiNotification4Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
// import { FiUser } from "react-icons/fi";
import admin from "../../../Assets/image/userImage/84.jpg";

const SNotification = () => {
	return (
		// header phone
		<nav className="pr-1 w-full h-full flex justify-end items-center">
			<button className="w-full md:w-1/2 h-90% flex justify-around items-center">
				<img
					src={admin}
					alt="admin"
					className="p-1 h-10 w-10 text-white text-opacity-70 text-3xl border-2 border-dashed rounded-full border-opacity-40"
				/>
				<p className="text-white text-opacity-90 font-bold">Thomas</p>
				<button>
					<IoIosArrowDown className="text-white text-lg text-opacity-40" />
				</button>
			</button>
			<nav className="w-2/5 md:w-1/5 h-90% flex justify-between items-center">
				<button>
					<RiNotification4Fill className="text-xl text-white text-opacity-40" />
				</button>
				<button>
					<FiMenu className="text-2xl text-white text-opacity-40" />
				</button>
			</nav>
		</nav>
	);
};

export default SNotification;
