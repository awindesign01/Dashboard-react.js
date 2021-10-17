import { FiSearch } from "react-icons/fi";

const SSearchHeader = () => {
	return (
		<nav className="w-55% h-10 bg-gray-600 flex justify-around items-center rounded-lg">
			<input type="search" className="px-2 w-11/12 h-3/4 bg-transparent font-bold" placeholder="Search"/>
			<FiSearch className="w-10 text-xl text-white text-opacity-40"/>
		</nav>
	);
};

export default SSearchHeader;
