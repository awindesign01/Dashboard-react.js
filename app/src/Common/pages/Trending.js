import MainTrending from "../Components/Trending/MainTrending";
import SCharTrending from "../Components/Trending/SChartTrending";
import SChartTrending from "../Components/Trending/SChartTrending2";
import SCoins from "../Components/Trending/SCoins";

const m = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const Trending = () => {
	return (
		<section>
			<article className="mb-2 w-full h-12 flex items-center ">
				<header>
					<h1 className="text-xl xl:text-2xl text-white font-bold tracking-wider">Trending</h1>
				</header>
				{/* data in page trending */}
				<p className="ml-4 text-white text-xxs tracking-wider">
					<span className="mr-1 text-xl">»</span>
					{m[new Date().getMonth()]} / {new Date().getDate()} / {new Date().getFullYear()}
				</p>
			</article>
			<article className="w-full h-28 flex justify-around">
				<MainTrending />
			</article>
			<article className="my-3 w-full h-80 flex justify-around items-center">
				{/* <SCharTrending />
        <SChartTrending /> */}
			</article>
			<article className="my-3 w-full h-40 flex items-center">
				<SCoins />
			</article>
		</section>
	);
};

export default Trending;
