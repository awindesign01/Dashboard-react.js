import RecentlyMain from "../Components/SPlaylist/RecentlyMain";
import SFollowingPlaylist from "../Components/SPlaylist/SFollowingPlaylist";
import SMainPlaylist from "../Components/SPlaylist/SMainPlaylist";

const Playlist = () => {
	return (
		<section>
			<article className="mb-2 w-full h-12 flex items-center">
				<header className="w-full md:flex md:justify-between">
					<nav className="lg:ml-2 xl:ml-4 md:w-60%">
						<h1 className=" text-xl xl:text-2xl text-white font-bold tracking-wider">
							Playlist
						</h1>
					</nav>
					<nav className="hidden md:block lg:ml-2 xl:ml-4 md:w-1/3">
						<h1 className="text-xl xl:text-2xl text-white font-bold tracking-wider">
							Followers
						</h1>
					</nav>
				</header>
			</article>
			<article className="w-full md:flex lg:flex md:justify-between lg:justify-around items-center h-auto lg:h-45%">
				<SMainPlaylist />
				<SFollowingPlaylist />
			</article>
			<article className="xl:mt-3 mb-2 w-full h-12 flex items-center">
				<header>
					<h1 className="lg:ml-2 xl:ml-4 text-xl xl:text-2xl text-white font-bold tracking-wider">
						Recently Played
					</h1>
				</header>
			</article>
			<article
				className="w-full h-auto flex flex-wrap justify-between lg:justify-around"
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
