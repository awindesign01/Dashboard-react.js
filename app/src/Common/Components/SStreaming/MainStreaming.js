import { VscDebugStart } from "react-icons/vsc";

const MainStreaming = () => {
	// responsive
	return (
		<nav className="mb-2 lg:m-0 w-full md:w-1/2 lg:w-1/2 xl:w-60% h-52 lg:h-60 bg-red-2 rounded-2xl flex justify-around">
			<nav className="w-45% h-auto flex flex-col justify-around items-center">
				<nav className="w-full">
					<h1 className="text-2xl xl:text-3xl text-white font-bold">Hello ali</h1>
					<p className="text-sm xl:text-base text-white font-bold tracking-widest">Welcome to live streaming</p>
				</nav>
				<nav className="w-full h-12">
					<button className="bg-red-1 rounded-lg w-full xl:w-4/5 h-full flex justify-evenly items-center">
						<h2 className="text-white lg:text-sm font-bold tracking-wider">Start Streaming</h2>
						<VscDebugStart className="text-xl text-white animate-bounce_right relative" />
					</button>
				</nav>
			</nav>
			<nav className="w-45% h-full bg-main-image-1 bg-contain bg-no-repeat bg-right"></nav>
		</nav>
	);
};

export default MainStreaming;
