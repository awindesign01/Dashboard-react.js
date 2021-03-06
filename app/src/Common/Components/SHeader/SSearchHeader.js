import { FiSearch } from "react-icons/fi";

const SSearchHeader = () => {
	return (
		<nav className="hidden w-1/2 h-full lg:flex lg:justify-start lg:items-center">
			<nav className="lg:ml-2 xl:ml-4 w-full lg:w-90% h-10 bg-black-1 border-2 border-opacity-40 flex justify-between items-center rounded-lg hover:border-red-400 transition-all">
				<input
					type="search"
					className="px-2 w-90% h-90% bg-transparent text-white text-sm font-bold tracking-wider"
					placeholder="Search"
				/>
				<FiSearch className="lg:w-6 xl:w-8 lg:text-xl xl:text-2xl text-white text-opacity-40" />
			</nav>
		</nav>
	);
};

export default SSearchHeader;
