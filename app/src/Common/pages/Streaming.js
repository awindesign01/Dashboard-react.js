import SMainStreaming from "../Components/SStreaming/SMainStreaming";
import SPopularSreaming from "../Components/SStreaming/SPopularSreaming";
import { FaArrowRight } from "react-icons/fa";

const Streaming = () => {
	return (
		<section>
			<article className="mb-2 w-full h-12 flex items-center">
				<header className="lg:mx-2 xl:mx-6 w-full flex justify-between">
					<nav className="">
						<h1 className="text-xl xl:text-2xl text-white font-bold tracking-wider">Streaming</h1>
					</nav>
					<nav className="flex justify-around items-center">
						<a href="#" className="text-white font-bold">
							More
						</a>
						<FaArrowRight className="ml-1 text-white" />
					</nav>
				</header>
			</article>
			<article className="w-full lg:flex lg:justify-between lg:items-center h-auto lg:h-45%">
				<SMainStreaming />
			</article>
			<article className="xl:mt-3 mb-2 w-full h-12 flex items-center">
				<header className="lg:mx-2 xl:mx-6 w-full flex justify-between">
					<nav className="">
						<h1 className="text-xl xl:text-2xl text-white font-bold tracking-wider">Popular</h1>
					</nav>
					<nav className="flex justify-around items-center">
						<a href="#" className="text-white font-bold">
							More
						</a>
						<FaArrowRight className="ml-1 text-white" />
					</nav>
				</header>
			</article>
			<article className="w-full h-auto lg:h-64 xl:h-80 flex flex-wrap justify-between lg:justify-around items-center lg:overflow-y-scroll lg:border-2 lg:border-yellow-1 rounded-2xl">
				<SPopularSreaming />
			</article>
		</section>
	);
};

export default Streaming;
