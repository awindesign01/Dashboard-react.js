import { AiFillHome } from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
import { IoIosDownload } from "react-icons/io";
import { HiDocumentDownload } from "react-icons/hi";
import { BsBookmarkPlusFill } from "react-icons/bs";

const NavMenu = [
	{ icon: <AiFillHome />, text: "Discover" },
	{ icon: <FiTrendingUp />, text: "Trending" },
	{ icon: <IoIosDownload />, text: "Streaming" },
	{ icon: <HiDocumentDownload />, text: "Playlist" },
	{ icon: <BsBookmarkPlusFill />, text: "Bookmark" },
];

const SMenu = () => {
	return (
		<>
			<nav className="pt-5 pb-3">
				<p className="text-gray-500 text-opacity-50 text-xs font-bold tracking-widest">MENU</p>
			</nav>
			<nav>
				{NavMenu.map((i) => (
					<button className="group">
						<nav className="my-3 flex items-center">
							<nav className="w-9 h-9 bg-gray-800 grid place-items-center rounded-xl text-lg text-white text-opacity-40 group-hover:bg-red-500 group-hover:text-white transition">
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

export default SMenu;
