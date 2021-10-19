import { AiFillHome } from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
import { IoIosDownload } from "react-icons/io";
import { HiDocumentDownload } from "react-icons/hi";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavMenu = [
	{ icon: <AiFillHome />, text: "Discover", path: "/discover" },
	{ icon: <FiTrendingUp />, text: "Trending", path: "/trending" },
	{ icon: <IoIosDownload />, text: "Streaming", path: "/streaming" },
	{ icon: <HiDocumentDownload />, text: "Playlist", path: "/playlist" },
	{ icon: <BsBookmarkPlusFill />, text: "Bookmark", path: "/bookmark" },
];

const SMenu = () => {
	return (
		<>
			<nav className="pt-5 pb-3">
				<p className="text-gray-500 text-opacity-50 text-xs font-bold tracking-widest">MENU</p>
			</nav>
			<nav>
				{NavMenu.map((i) => (
					<nav className="w-2/3">
						<Link to={i.path} key={i.path}>
							<nav className="my-5 w-full flex items-center group">
								<nav className="w-9 h-9 bg-gray-800 grid place-items-center rounded-xl text-lg text-white text-opacity-40 group-hover:bg-red-500 group-hover:text-white transition">
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

export default SMenu;
