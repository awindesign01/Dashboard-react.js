import { RiNotification4Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FiUser } from "react-icons/fi";

const SNotification = () => {
	return (
		<nav className="pr-1 w-3/5 h-full flex justify-end items-center">
			<nav className="w-1/4h-10 flex justify-around items-center">
				{/* <img src="" alt="" /> */}
				<FiUser className="text-white text-opacity-70 text-3xl border-2 rounded-full border-opacity-40" />
				<p className="text-white text-opacity-90 font-bold">Thomas</p>
				<button>
					<IoIosArrowDown className="text-white text-opacity-40" />
				</button>
			</nav>
			<nav className="w-1/6 h-10 grid place-items-center">
				<button>
					<RiNotification4Fill className="text-xl text-white text-opacity-40" />
				</button>
			</nav>
		</nav>
	);
};

export default SNotification;
