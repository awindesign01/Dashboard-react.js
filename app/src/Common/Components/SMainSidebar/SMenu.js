import { AiFillHome } from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
import { IoIosDownload, IoMdHeartEmpty } from "react-icons/io";
import { HiDocumentDownload } from "react-icons/hi";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { NavLink,useLocation,useParams,useHistory,withRouter } from "react-router-dom";
import "./SMenu.css";

const NavMenu = [
	{ icon: <AiFillHome />, text: "Home", to: "/", exact: true },
	{ icon: <FiTrendingUp />, text: "Trending", to: "/trending" },
	{ icon: <IoIosDownload />, text: "Streaming", to: "/streaming" },
	{ icon: <HiDocumentDownload />, text: "Playlist", to: "/playlist" },
	{ icon: <BsBookmarkPlusFill />, text: "Bookmark", to: "/bookmark" },
];

const SMenu = (props) => {
	console.log(useLocation());
	console.log(useParams());
	console.log(useHistory());
	return (
		<>
			<nav className="pt-5 pb-3">
				<p className="text-gray-500 text-opacity-50 text-xs font-bold tracking-widest">MENU</p>
			</nav>
			<nav>
				{NavMenu.map((i) => (
					<nav className="w-2/3" key={i.to}>
						<NavLink to={i.to} exact={i.exact || false} activeClassName="activeLink">
							<nav className="my-5 w-full flex items-center group">
								{/* <nav className="w-9 h-9 bg-gray-800 grid place-items-center rounded-xl text-lg text-white text-opacity-40 group-hover:bg-red-500 group-hover:text-white transition">
									{i.icon}
								</nav>
								<nav
									className="mx-3 text-gray-500 font-bold group-hover:text-white transition"
									activeClassName="activeLink"
								>
									<p>{i.text}</p>
								</nav> */}
								{i.text}
							</nav>
						</NavLink>
					</nav>
				))}
			</nav>
		</>
	);
};

export default withRouter(SMenu);
