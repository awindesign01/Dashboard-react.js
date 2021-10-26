import { AiFillHome } from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
import { IoIosDownload } from "react-icons/io";
import { HiDocumentDownload } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const NavMenu = [
	{ icon: <AiFillHome />, text: "Live Stream", to: "./live-stream" },
	{ icon: <FiTrendingUp />, text: "Tutorial", to: "/tutorial" },
	{ icon: <IoIosDownload />, text: "Competition", to: "/competition" },
	{ icon: <HiDocumentDownload />, text: "Community", to: "/community" },
];

const SCategory = () => {
	return (
		<>
			<nav className="mx-auto pt-2 pb-3 w-95%">
				<p className="text-gray-500 text-opacity-50 text-xs font-bold tracking-widest">CATEGORY</p>
			</nav>
			<nav className="mx-auto w-95%">
				{NavMenu.map((i) => (
					<nav className="w-full">
						<Link to={i.to} key={i.to}>
							<nav className="my-5 lg:my-2 xl:my-5 w-full flex items-center group ">
								<NavLink
									to={i.to}
									className="w-9 h-9 bg-black-1 grid place-items-center rounded-xl text-lg text-white text-opacity-40 group-hover:bg-yellow-300 group-hover:text-white transition"
									activeStyle={{
										backgroundColor: "rgba(252, 211, 77)",
										color: "#fff",
									}}
								>
									{i.icon}
								</NavLink>
								<NavLink
									to={i.to}
									className="mx-3 text-gray-500 text-sm xl:text-base font-bold group-hover:text-white transition"
									activeStyle={{
										color: "#fff",
									}}
								>
									<p>{i.text}</p>
								</NavLink>
							</nav>
						</Link>
					</nav>
				))}
			</nav>
		</>
	);
};

export default SCategory;
