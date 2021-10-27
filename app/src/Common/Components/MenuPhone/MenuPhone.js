import { AiFillHome } from "react-icons/ai";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { FiSearch, FiStar, FiTrendingUp } from "react-icons/fi";
import { HiDocumentDownload } from "react-icons/hi";
import { IoIosDownload } from "react-icons/io";
import { Link, NavLink, withRouter } from "react-router-dom";

const NavMenu = [
	{ icon: <AiFillHome />, text: "Home", to: "/", exact: false },
	{ icon: <FiTrendingUp />, text: "Trending", to: "/trending" },
	{ icon: <IoIosDownload />, text: "Streaming", to: "/streaming" },
	{ icon: <HiDocumentDownload />, text: "Playlist", to: "/playlist" },
	{ icon: <BsBookmarkPlusFill />, text: "Bookmark", to: "/bookmark" },
];
const NavMenu2 = [
	{ icon: <AiFillHome />, text: "Live Stream", to: "./live-stream" },
	{ icon: <FiTrendingUp />, text: "Tutorial", to: "/tutorial" },
	{ icon: <IoIosDownload />, text: "Competition", to: "/competition" },
	{ icon: <HiDocumentDownload />, text: "Community", to: "/community" },
];

const MenuPhone = () => {
	return (
		<nav className="h-full w-full top-0 right-0 bg-black-1 fixed transition-opacity z-10 flex flex-col justify-center items-center">
			<nav className="w-4/5 h-10 flex justify-between">
				<nav className="w-2/3 lg:w-90% h-10 bg-black-1 border-2 border-opacity-40 flex justify-between items-center rounded-lg">
					<input
						type="search"
						className="px-2 w-90% h-90% bg-transparent text-white text-sm font-bold tracking-wider"
						placeholder="Search"
					/>
					<FiSearch className="w-6 text-xl text-white text-opacity-40" />
				</nav>
				<button className="p-1 w-30% md:w-1/5 lg:w-90% h-10 bg-black-1 border-2 border-yellow-400 border-opacity-60 flex justify-around items-center rounded-lg">
					<FiStar className="text-yellow-400 text-xl"/>
					<p className="text-white text-sm font-bold">Premium</p>
				</button>
			</nav>
			<nav className="h-4/5 w-4/5">
				{NavMenu.map((i) => (
					<nav className="w-full" key={i.to}>
						<Link to={i.to} exact={i.exact || false}>
							<nav className=" my-5 w-1/2 flex items-center group">
								<NavLink
									to={i.to}
									className="w-8 h-8 md:w-10 md:h-10 bg-black-3 grid place-items-center rounded-xl text-lg text-white text-opacity-40 group-hover:bg-red-500 group-hover:text-white transition"
									activeStyle={{
										backgroundColor: "rgba(239, 68, 68)",
										color: "#fff",
									}}
								>
									{i.icon}
								</NavLink>
								<NavLink
									to={i.to}
									activeStyle={{
										color: "#fff",
									}}
									className="mx-3 text-gray-500 font-bold text-sm group-hover:text-white transition tracking-wider"
								>
									<h4>{i.text}</h4>
								</NavLink>
							</nav>
						</Link>
					</nav>
				))}
				<hr className="w-1/2 h-2 border-white border-opacity-40" />
				{NavMenu2.map((i) => (
					<nav className="w-2/3">
						<Link to={i.to} key={i.to}>
							<nav className="my-5 w-full flex items-center group ">
								<NavLink
									to={i.to}
									className="w-8 h-8 md:w-10 md:h-10 bg-black-3 grid place-items-center rounded-xl text-lg text-white text-opacity-40 group-hover:bg-yellow-300 group-hover:text-white transition"
									activeStyle={{
										backgroundColor: "rgba(252, 211, 77)",
										color: "#fff",
									}}
								>
									{i.icon}
								</NavLink>
								<NavLink
									to={i.to}
									className="mx-3 text-gray-500 font-bold text-sm group-hover:text-white transition tracking-wider"
									activeStyle={{
										color: "#fff",
									}}
								>
									<h4>{i.text}</h4>
								</NavLink>
							</nav>
						</Link>
					</nav>
				))}
			</nav>
		</nav>
	);
};

export default withRouter(MenuPhone);
