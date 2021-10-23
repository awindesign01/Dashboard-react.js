import userImage1 from "../../../Assets/image/userImage/44.jpg";
import AOS from "aos";

const SMain = () => {
	AOS.init();
	return (
		<nav
			// className="h-full w-68% bg-red-500 rounded-2xl bg-main-image-1 bg-contain bg-no-repeat bg-right"
			data-aos="fade-right"
			data-aos-duration="700"
			data-aos-easing="ease-in-out"
		>
			{/* <nav className="w-2/3 h-full grid place-items-center">
				<h1 className="w-4/5 text-white text-5xl">
					How to do basic jumping and how to landing safely
				</h1>
				<nav className="w-4/5 flex items-center">
					<nav className="h-16 w-16 border-2 rounded-full flex justify-center items-center">
						<img src={userImage1} alt="user" className="h-14 w-14 rounded-full" />
					</nav>
					<nav className="ml-3 text-white">
						<p className="font-bold tracking-wide">thomas Hope</p>
						<p className="text-sm">115.3K views - 13 weeks ago</p>
					</nav>
				</nav>
			</nav>
			<nav className="w-1/3 h-4/5"></nav> */}
		</nav>
	);
};

export default SMain;
