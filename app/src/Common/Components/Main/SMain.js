import userImage1 from "../../../Assets/image/userImage/44.jpg";
import AOS from "aos";

const SMain = () => {
	AOS.init();
	return (
		<nav
			className="mb-4 md:m-0 h-52 lg:h-60 w-full md:w-60% bg-red-500 rounded-2xl bg-main-image-1 bg-contain bg-no-repeat bg-right"
			data-aos="fade-right"
			data-aos-duration="700"
			data-aos-easing="ease-in-out"
		>
			<nav className="w-2/3 h-full grid place-items-center xl:flex xl:flex-col xl:justify-around xl:items-center">
				<h1 className="w-90% md:w-3/4 text-white text-2xl xl:text-5xl">
					How to do basic jumping and how to landing safely
				</h1>
				<nav className="w-90% xl:w-3/4 h-10 flex md:justify-center lg:justify-start items-center">
					<nav className="p-1 h-12 w-12 border-2 border-dashed rounded-full flex justify-center items-center">
						<img src={userImage1} alt="user" className="h-10 w-10 rounded-full" />
					</nav>
					<nav className="ml-3 text-white">
						<p className="font-bold tracking-wide">thomas Hope</p>
						<p className="text-xs">11.3K views - 13 weeks ago</p>
					</nav>
				</nav>
			</nav>
		</nav>
	);
};

export default SMain;
