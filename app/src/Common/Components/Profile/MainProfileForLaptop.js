import img from "../../../Assets/image/userImage/45.jpg";

const MainProfileForLaptop = () => {
	return (
		<>
			<nav className="p-2 w-full h-20 flex">
				<nav className="px-2 lg:w-30% xl:w-1/5 h-full ">
					<img
						src={img}
						alt="user-profile-img"
						className="p-1 rounded-full border-2 border-dashed border-opacity-40 border-black-3 w-full h-full"
					/>
				</nav>
				<nav className="px-2 w-70% h-full flex flex-col justify-around items-start text-black-3 font-bold">
					<h1 className="text-xl">Awin Design</h1>
					<p className="text-xs text-gray-400">Front-End(React.js)</p>
					<nav className="flex flex-col justify-around items-start">
						<p className="text-xs text-gray-400">24 Nov 2001</p>
						<p className="text-xs text-gray-400">Love Web Developer</p>
					</nav>
				</nav>
			</nav>
		</>
	);
};

export default MainProfileForLaptop;
