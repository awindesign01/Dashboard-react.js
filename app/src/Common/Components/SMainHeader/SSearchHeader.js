import { FiSearch } from "react-icons/fi";

const SSearchHeader = () => {
	return (
		<nav className="hidden w-1/2 h-full lg:grid lg:place-items-center">
			<nav className="w-full lg:w-90% h-10 bg-black-1 border-2 border-opacity-40 flex justify-between items-center rounded-lg">
				<input
					type="search"
					className="px-2 w-90% h-90% bg-transparent text-white font-bold tracking-wider"
					placeholder="Search"
				/>
				<FiSearch className="w-6 text-xl text-white text-opacity-40" />
			</nav>
		</nav>
	);
};

export default SSearchHeader;
