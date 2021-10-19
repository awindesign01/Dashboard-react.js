import SMain from "../Components/Main/SMain";
import SSubsidiary from "../Components/Main/SSubsidiary";
import SWatched from "../Components/Watched/SWatched";

const Descover = () => {
	return (
		<section>
			<article className="mb-2 w-full h-12 flex items-center">
				<header className="text-4xl text-white font-bold tracking-wider">Discover</header>
			</article>
			<article className="w-full h-72 flex justify-around">
				<SMain />
				<SSubsidiary />
			</article>
			<article className="my-3 w-full h-12 flex items-center">
				<header className="text-2xl text-white font-bold tracking-wider">Most Watched</header>
			</article>
			<article className="w-full h-64 flex justify-around items-center">
				<SWatched />
			</article>
		</section>
	);
};

export default Descover;
