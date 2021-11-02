import { FiArrowRight } from "react-icons/fi";
import MainNews from "../Components/SNews/MainNews";
import SubsidiaryNews from "../Components/SNews/SubsidiaryNews";

const Bookmark = () => {
	return (
		<section>
			<article className="mb-2 lg:mx-2 xl:mx-5 w-auto h-12 flex items-center">
				<header className="w-full flex justify-between">
					<nav className="w-auto h-auto ">
						<h1 className="text-xl xl:text-2xl text-white font-bold tracking-wider">News</h1>
					</nav>
					<nav className="w-auto h-auto flex justify-around items-center">
						<a href="#" className="text-white font-bold">
							More
						</a>
						<FiArrowRight className="ml-1 text-white" />
					</nav>
				</header>
			</article>
			<article className="mb-3 w-full h-auto">
				<MainNews />
			</article>
			<article className="my-3 lg:mx-2 xl:mx-6 xl:my-6 w-auto h-12 flex items-center">
				<header className="w-full flex justify-between">
					<nav className="w-auto h-auto ">
						<h1 className="text-xl xl:text-2xl text-white font-bold tracking-wider">Hot News</h1>
					</nav>
					<nav className="w-auto h-auto flex justify-around items-center">
						<a href="#" className="text-white font-bold">
							More
						</a>
						<FiArrowRight className="ml-1 text-white" />
					</nav>
				</header>
			</article>
			<article className="w-full h-auto flex md:flex-row flex-wrap lg:flex-nowrap justify-around items-center">
				<SubsidiaryNews />
			</article>
		</section>
	);
};

export default Bookmark;
