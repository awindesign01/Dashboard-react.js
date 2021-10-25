import SMain from "../Components/Main/SMain";
import SSubsidiary from "../Components/Main/SSubsidiary";
import SWatched from "../Components/Watched/SWatched";

const Descover = () => {
	return (
		<section>
			<article className="mb-2 lg:ml-2 xl:ml-5 w-auto h-12 flex items-center">
				<header className="text-4xl text-white font-bold tracking-wider">Home</header>
			</article>
			<article className="mb-3 w-full h-auto md:flex md:justify-between lg:justify-around">
				<SMain />
				<SSubsidiary />
			</article>
			<article className="my-3 lg:ml-2 xl:ml-6 xl:my-6 w-auto h-12 flex items-center">
				<header className="text-2xl text-white font-bold tracking-wider">Most Watched</header>
			</article>
			<article className="w-full h-auto flex md:flex-row flex-wrap lg:flex-nowrap justify-around items-center">
				<SWatched />
			</article>
		</section>
	);	
};

export default Descover;
