import userImage2 from "../../../Assets/image/userImage/84.jpg";
import AOS from "aos";

const SSubsidiary = () => {
	AOS.init();
	return (
		<nav
			className="h-full w-30% bg-yellow-300 rounded-2xl bg-main-image-2 bg-contain bg-no-repeat bg-right"
			data-aos="fade-right"
			data-aos-duration="700"
			data-aos-delay="600"
			data-aos-easing="ease-in-out"
		>
			<nav className="mx-auto w-90% h-full flex flex-col justify-around items-start">
				<h1 className="w-55% text-white text-4xl text-left">Skateboard Tips You need to Know</h1>
				<nav className="w-full flex items-center">
					<nav className="h-16 w-16 border-2 rounded-full flex justify-center items-center">
						<img src={userImage2} alt="user" className="h-14 w-14 rounded-full" />
					</nav>
					<nav className="ml-3 text-white">
						<p className="font-bold tracking-wide">thomas Hope</p>
						<p className="text-sm">5.3K views - 2 weeks ago</p>
					</nav>
				</nav>
			</nav>
		</nav>
	);
};

export default SSubsidiary;
