import SMainStreaming from "../Components/SStreaming/SMainStreaming";
import SPopularSreaming from "../Components/SStreaming/SPopularSreaming";

const Streaming = () => {
	return (
		<section>
			<article className="mb-2 w-full h-12 flex items-center">
				<header>
					<h1 className="lg:ml-2 xl:ml-4 text-xl xl:text-2xl text-white font-bold tracking-wider">
						Streaming
					</h1>
				</header>
			</article>
			<article className="w-full lg:flex lg:justify-between lg:items-center h-auto lg:h-45%">
				<SMainStreaming />
			</article>
			<article className="xl:mt-3	 mb-2 w-full h-12 flex items-center">
				<header>
					<h1 className="lg:ml-2 xl:ml-4 text-xl xl:text-2xl text-white font-bold tracking-wider">
						Popular
					</h1>
				</header>
			</article>
			<article className="w-full h-auto lg:h-64 xl:h-80 flex flex-wrap justify-between lg:justify-around items-center lg:overflow-y-scroll">
				<SPopularSreaming />
			</article>
		</section>
	);
};

export default Streaming;
