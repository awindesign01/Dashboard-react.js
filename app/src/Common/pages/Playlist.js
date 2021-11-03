import RecentlyMain from "../Components/SPlaylist/RecentlyMain";
import SFollowingPlaylist from "../Components/SPlaylist/SFollowingPlaylist";
import SMainPlaylist from "../Components/SPlaylist/SMainPlaylist";
import { FaArrowRight } from "react-icons/fa";

const Playlist = () => {
	return (
		<section>
			<article className="mb-2 w-full h-12 flex items-center">
				<header className="w-full md:flex md:justify-between">
					<nav className="lg:ml-2 xl:ml-4 md:w-60%">
						<h1 className=" text-xl xl:text-2xl text-white font-bold tracking-wider">Playlist</h1>
					</nav>
					<nav className="hidden md:flex justify-between lg:ml-2 xl:ml-4 md:w-1/3">
						<nav>
							<h1 className="text-xl xl:text-2xl text-white font-bold tracking-wider">Followers</h1>
						</nav>
						<nav className="flex justify-around items-center">
							<a href="#" className="text-white font-bold">
								More
							</a>
							<FaArrowRight className="ml-1 text-white" />
						</nav>
					</nav>
				</header>
			</article>
			<article className="w-full md:flex lg:flex md:justify-between lg:justify-around items-center h-auto lg:h-45%">
				<SMainPlaylist />
				<SFollowingPlaylist />
			</article>
			<article className="xl:mt-3 mb-2 w-full h-12 flex items-center">
				<header className="lg:mx-2 xl:mx-6 w-full flex justify-between">
					<nav className="">
						<h1 className="text-xl xl:text-2xl text-white font-bold tracking-wider">
							Recently Played
						</h1>
					</nav>
					<nav className="flex justify-around items-center">
						<a href="#" className="text-white font-bold">
							More
						</a>
						<FaArrowRight className="ml-1 text-white" />
					</nav>
				</header>
			</article>
			<article
				className="lg:border-2 lg:border-yellow-1 rounded-2xl w-full h-52 xl:h-80 flex flex-wrap justify-between md:justify-around lg:justify-around lg:overflow-y-scroll"
				// data-aos="fade-right"
				// data-aos-duration="700"
				// data-aos-easing="ease-in-out"
			>
				<RecentlyMain />
			</article>
		</section>
	);
};

export default Playlist;
