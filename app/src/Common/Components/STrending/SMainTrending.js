import image1 from "../../../Assets/image/userImage/32.jpg";
import image2 from "../../../Assets/image/userImage/44.jpg";
import image3 from "../../../Assets/image/userImage/45.jpg";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import AOS from "aos";

const TrandingUser = [
	{
		id: 1,
		img: image1,
		name: "Kelton Murazik",
		region: "USA",
		icon: <FiTrendingUp className="text-2xl lg:text-xl xl:text-2xl text-green-1" />,
		price: <p className="text-lg xl:text-xl lg:text-base text-green-1 font-bold">$ 650.00</p>,
		paragraphs: "Last 6 month",
		content: "5K views - 1 weeks ago",
		data_aos_delay: 200,
	},
	{
		id: 2,
		img: image2,
		name: "Brycen Kozey",
		region: "GER",
		icon: <FiTrendingDown className="text-2xl lg:text-xl xl:text-2xl text-red-1" />,
		price: <p className="text-lg xl:text-xl lg:text-base text-red-1 font-bold">$ 3600.00</p>,
		paragraphs: "Last 6 month",
		content: "11.8K views - 12 weeks ago",
		data_aos_delay: 400,
	},
	{
		id: 3,
		img: image3,
		name: "Herminia Rath",
		region: "JAP",
		icon: <FiTrendingDown className="text-2xl lg:text-xl xl:text-2xl text-red-1" />,
		price: <p className="text-lg xl:text-xl lg:text-base text-red-1 font-bold">$ 7620.00</p>,
		paragraphs: "Last 6 month",
		content: "238K views - 3 weeks ago",
		data_aos_delay: 600,
	},
];

const MainTrending = () => {
	// AOS.init();
	return (
		<>
			{TrandingUser.map((c) => (
				<nav
					className="mb-2 w-full md:w-45% lg:w-30% md:h-28 xl:h-32 bg-black-1 rounded-xl flex justify-around items-center"
					data-aos="fade-down"
					data-aos-duration="500"
					data-aos-easing="ease-in-out"
					data-aos-delay={c.data_aos_delay}
					key={c.id}
				>
					<nav className="w-2/3 h-4/5 flex flex-wrap">
						<nav className="w-1/4 h-3/5 grid place-items-center">
							<nav className="h-12 w-12 border-2 border-opacity-40 rounded-full flex justify-center items-center">
								<img src={c.img} alt="user" className="h-10 w-10 rounded-full" />
							</nav>
						</nav>
						<nav className="pl-2 w-3/4 h-3/5">
							<h1 className="text-white font-bold text-lg lg:text-base tracking-wide">{c.name}</h1>
							<p className="text-white font-bold text-opacity-40 text-sm lg:text-xs tracking-wide">
								{c.region}
							</p>
						</nav>
						<nav className="mx-auto w-90% h-2/5 text-white flex justify-start items-center">
							<p className="text-white font-bold text-opacity-40 text-xs lg:text-xxs xl:text-xs tracking-wide">
								{c.content}
							</p>
						</nav>
					</nav>
					<nav className="w-30% h-4/5 flex flex-col justify-evenly">
						<nav className="w-full h-auto grid place-items-center">
							{c.icon}
						</nav>
						<nav className="w-full h-8 grid place-items-center ">
							{c.price}
						</nav>
						<nav className="w-full h-5 grid place-items-center">
							<p className="text-white text-opacity-40 text-xs lg:text-xxs tracking-wider">{c.paragraphs}</p>
						</nav>
					</nav>
				</nav>
			))}
		</>
	);
};

export default MainTrending;
