import SWatched from "../Watched/SWatched";
import SMain from "./SMain";
import SSubsidiary from "./SSubsidiary";

const Main = () => {
	return (
		<section className="w-4/5 h-1/2">
			<article className="mb-2 w-full h-12 flex items-center">
				<h1 className="text-3xl text-white font-bold tracking-wider">Discover</h1>
			</article>
			<article className="w-full h-72 flex justify-around">
				<SMain />
				<SSubsidiary />
			</article>
			<article className="my-3 w-full h-12 flex items-center">
				<h1 className="text-3xl text-white font-bold tracking-wider">Most Watched</h1>
			</article>
			<article className="w-full h-64 flex justify-around items-center">
				<SWatched />
			</article>
		</section>
	);
};

export default Main;
