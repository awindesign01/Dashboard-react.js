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
				<header className="text-4xl text-white font-bold tracking-wider">Trending</header>
				<p className="ml-4 text-white font-bold">
					<span className="mr-1 text-2xl">»</span>
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
