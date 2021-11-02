import { AiFillHome } from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
import { IoIosDownload, IoMdHeartEmpty } from "react-icons/io";
import { HiDocumentDownload } from "react-icons/hi";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { NavLink, Link, withRouter } from "react-router-dom";

const NavMenu = [
	{ icon: <AiFillHome />, text: "Home", to: "/", exact: true },
	{ icon: <FiTrendingUp />, text: "Trending", to: "/trending" },
	{ icon: <IoIosDownload />, text: "Streaming", to: "/streaming" },
	{ icon: <HiDocumentDownload />, text: "Playlist", to: "/playlist" },
	{ icon: <BsBookmarkPlusFill />, text: "News", to: "/news" },
];

const SMenu = () => {
	return (
		<>
			<nav className="mx-auto w-95% pt-5 pb-3">
				<p className="text-gray-500 text-opacity-50 text-xs font-bold tracking-widest">MENU</p>
			</nav>
			<nav className="mx-auto w-95%">
				{NavMenu.map((i) => (
					<nav className="w-full" key={i.to}>
						<Link to={i.to} exact={i.exact || false}>
							<nav className="my-5 lg:my-2 xl:my-5 w-full flex items-center group">
								<NavLink
									to={i.to}
									className="w-9 h-9 bg-black-1 grid place-items-center rounded-xl text-lg text-white text-opacity-40 group-hover:bg-red-500 group-hover:text-white transition"
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
									className="mx-3 text-gray-500 text-sm xl:text-base font-bold group-hover:text-white transition"
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

export default withRouter(SMenu);
