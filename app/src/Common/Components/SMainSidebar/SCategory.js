import { AiFillHome } from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
import { IoIosDownload } from "react-icons/io";
import { HiDocumentDownload } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavMenu = [
	{ icon: <AiFillHome />, text: "Live Stream", path: "./live-stream" },
	{ icon: <FiTrendingUp />, text: "Tutorial", path: "/tutorial" },
	{ icon: <IoIosDownload />, text: "Competition", path: "/competition" },
	{ icon: <HiDocumentDownload />, text: "Community", path: "/community" },
];

const SCategory = () => {
	return (
		<>
			<nav className="pt-2 pb-3">
				<p className="text-gray-500 text-opacity-50 text-xs font-bold tracking-widest">CATEGORY</p>
			</nav>
			<nav>
				{NavMenu.map((i) => (
					<nav className="w-2/3">
						<Link to={i.path} key={i.path}>
							<nav className="my-3 w-full flex items-center group ">
								<nav className="w-9 h-9 bg-gray-800 grid place-items-center rounded-xl text-lg text-white text-opacity-40 group-hover:bg-yellow-300 group-hover:text-white transition">
									{i.icon}
								</nav>
								<nav className="mx-3 text-gray-500 font-bold group-hover:text-white transition">
									<p>{i.text}</p>
								</nav>
							</nav>
						</Link>
					</nav>
				))}
			</nav>
		</>
	);
};

export default SCategory;
