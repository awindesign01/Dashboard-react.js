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
	const style =
		"my-3 w-full flex flex-col md:flex-row md:flex-wrap justify-around items-center";

	return (
		<section className="h-auto">
			<article className="mb-2 w-full h-12 flex items-center">
				<header>
					<h1 className="lg:ml-2 xl:ml-4 text-xl xl:text-2xl text-white font-bold tracking-wider">
						Trending
					</h1>
				</header>
				{/* data in page trending */}
				<p className="ml-4 text-white text-xxs xl:text-xs tracking-wider">
					<span className="mr-1 text-xl">»</span>
					{m[new Date().getMonth()]} / {new Date().getDate()} / {new Date().getFullYear()}
				</p>
			</article>
			<article className={`${style} ${"xl:h-1/5"}`}>
				<MainTrending />
			</article>
			<article className={`${style} ${"xl:h-3/5"}`}>
				<SCharTrending />
				<SChartTrending />
			</article>
			<article className={`${style} ${"xl:h-1/5"}`}>
				<SCoins />
			</article>
		</section>
	);
};

export default Trending;
