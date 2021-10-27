import userImage2 from "../../../Assets/image/userImage/84.jpg";
import AOS from "aos";

const SSubsidiary = () => {
	AOS.init();
	return (
		<nav
			className="md:m-0 h-52 lg:h-60 w-full md:w-1/3 bg-yellow-300 rounded-2xl bg-main-image-2 bg-contain bg-no-repeat bg-right"
			data-aos="fade-right"
			data-aos-duration="700"
			data-aos-delay="600"
			data-aos-easing="ease-in-out"
		>
			<nav className=" w-2/3 md:w-90% h-full grid place-items-center xl:flex xl:flex-col xl:justify-around xl:items-center">
				<h1 className="w-90% md:w-3/4 text-left text-white text-2xl md:text-lg xl:text-3xl">
					Skateboard Tips You need to Know landing safely
				</h1>
				<nav className="w-90% xl:w-3/4 h-10 flex md:justify-center xl:justify-start items-center">
					<nav className="p-1 h-12 w-12 border-2 border-dashed rounded-full flex justify-center items-center">
						<img src={userImage2} alt="user" className="h-10 w-10 rounded-full" />
					</nav>
					<nav className="ml-3 text-white">
						<p className="font-bold tracking-wide">thomas Hope</p>
						<p className="text-xs">5.3K views - 2 weeks ago</p>
					</nav>
				</nav>
			</nav>
		</nav>
	);
};

export default SSubsidiary;
