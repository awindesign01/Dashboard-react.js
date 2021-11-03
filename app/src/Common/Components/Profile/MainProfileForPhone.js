import img from "../../../Assets/image/userImage/45.jpg";

const MainProfileForPhone = () => {
	return (
		<>
			<nav className="mx-auto w-90% h-28 flex">
				<nav className="w-30% md:w-15% h-full">
					<img
						src={img}
						alt="user-profile-img"
						className="p-1 rounded-full border-2 border-dashed border-opacity-40 w-full h-full"
					/>
				</nav>
				<nav className="px-2 w-70% h-full flex flex-col justify-around items-start text-white font-bold">
					<h1 className="text-2xl">Awin Design</h1>
					<p className="text-sm text-gray-400">Front-End(React.js)</p>
					<nav className="flex flex-col justify-around items-start">
						<p className="text-sm text-gray-400">24 Nov 2001</p>
						<p className="text-sm text-gray-400">Love Web Developer</p>
					</nav>
				</nav>
			</nav>
		</>
	);
};

export default MainProfileForPhone;
