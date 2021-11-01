import imageUser from "../../../Assets/image/userImage/45.jpg";
import ReactPlayer from "react-player";

const SSubsidiaryStreaming = () => {
	return (
		<nav
			className="h-96 md:h-60 w-full lg:w-95% xl:w-11/12 bg-yellow-300 rounded-2xl text-white flex flex-col justify-around"
			data-aos="fade-right"
			data-aos-duration="700"
			data-aos-delay="1000"
			data-aos-easing="ease-in-out"
		>
			<nav className="px-2 w-full h-15% bg-yellow-400 rounded-2xl flex justify-center items-center">
				<nav className="h-full w-15% lg:w-1/5 xl:w-12% md:w-10% border-2 border-dashed rounded-full">
					<img src={imageUser} alt="img-user" className="p-1 rounded-full w-full h-full" />
				</nav>
				<nav className="px-2 h-full w-70% md:w-90% flex flex-col justify-around">
					<h1 className="text-xl font-bold lg:text-base">Awin Design</h1>
					<p className="text-sm font-bold lg:text-xs">799K followers</p>
				</nav>
				<nav className="h-full w-15% flex flex-col justify-evenly items-center">
					<nav className="h-3 lg:h-2 w-3 lg:w-2 bg-red-600 animate-pulse rounded-full"></nav>
					<p>Live</p>
				</nav>
			</nav>
			<nav className="w-full h-3/4 bg-yellow-1 rounded-2xl grid place-items-center overflow-hidden">
				<ReactPlayer url="https://www.youtube.com/watch?v=5qap5aO4i9A" width="95%" height="95%" />
			</nav>
		</nav>
	);
};

export default SSubsidiaryStreaming;
