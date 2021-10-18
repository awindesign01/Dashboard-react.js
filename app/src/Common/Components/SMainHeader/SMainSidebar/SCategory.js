import { AiFillHome } from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
import { IoIosDownload } from "react-icons/io";
import { HiDocumentDownload } from "react-icons/hi";

const NavMenu = [
	{ icon: <AiFillHome />, text: "Live Stream" },
	{ icon: <FiTrendingUp />, text: "Tutorial" },
	{ icon: <IoIosDownload />, text: "Competition" },
	{ icon: <HiDocumentDownload />, text: "Community" },
];

const SCategory = () => {
	return (
		<>
			<nav className="pt-2 pb-3">
				<p className="text-gray-500 text-opacity-50 text-xs font-bold tracking-widest">CATEGORY</p>
			</nav>
			<nav>
				{NavMenu.map((i) => (
					<button className="group">
						<nav className="my-3 flex items-center">
							<nav className="w-9 h-9 bg-gray-800 grid place-items-center rounded-xl text-lg text-white text-opacity-40 group-hover:bg-blue-500 group-hover:text-white transition">
								{i.icon}
							</nav>
							<nav className="mx-3 text-gray-500 font-bold group-hover:text-white transition">
								<p>{i.text}</p>
							</nav>
						</nav>
					</button>
				))}
			</nav>
		</>
	);
};

export default SCategory;
