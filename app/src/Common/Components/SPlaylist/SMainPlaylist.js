import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import customCss from "../../../../node_modules/react-animated-slider/src/pages/custom.css";
import { FaPlay, FaHeadphonesAlt } from "react-icons/fa";
import FaceImage1 from "../../../Assets/FaceImage/1.jfif"; 
import FaceImage2 from "../../../Assets/FaceImage/2.jfif";
import FaceImage3 from "../../../Assets/FaceImage/3.jpg";
import BgImage from "../../../Assets/BGImage/1.jpg";

const slides = [
	{
		name: "Awin Design",
		face_image: <FaceImage1 />,
		plays: "10,000",
		total_listen: 179,
		music_style: "pop",
		button1: (
			<button className="w-28 h-10 border">
				<p>Add to favorites</p>
			</button>
		),
		button2: (
			<button className="w-28 h-10 border">
				<p>Listen Now</p>
			</button>
		),
	},
	{
		name: "Awin Design",
		face_image: <FaceImage2 />,
		plays: "10,000",
		total_listen: 560,
		music_style: "pop",
		button1: (
			<button className="w-28 h-10 border">
				<p>Add to favorites</p>
			</button>
		),
		button2: (
			<button className="w-28 h-10 border">
				<p>Listen Now</p>
			</button>
		),
	},
	{
		name: "Awin Design",
		face_image: <FaceImage3 />,
		plays: "10,000",
		total_listen: 1236,
		music_style: "pop",
		button1: (
			<button className="w-28 h-10 border">
				<p>Add to favorites</p>
			</button>
		),
		button2: (
			<button className="w-28 h-10 border">
				<p>Listen Now</p>
			</button>
		),
	},
];

const SMainPlaylist = () => {
	return (
		<nav className="w-full h-52 md:w-60% text-white font-bold">
			<Slider classNames={customCss} autoplay={5000}>
				{slides.map((item) => (
					<nav
						key={item.name}
						className={`${
							customCss.sliderContent
						} ${" flex h-52 justify-center items-center rounded-2xl"}`}
						style={{ background: `url("${BgImage}") no-repeat center right` }}
					>
						<nav className="p-2 w-1/2 h-52 bg-gradient-to-r from-black">
							<h1 className="text-3xl">On Purpose</h1>
							<p>with Jay Shetty</p>
							<nav className="my-2 flex flex-col w-full">
								<nav className="flex">
									<FaPlay className="mr-2 text-sm" />
									<p className="text-sm">{item.plays}+ Plays</p>
								</nav>
								<nav className="flex">
									<FaHeadphonesAlt className="mr-2 text-sm" />
									<p className="text-sm">{item.total_listen} currently listening</p>
								</nav>
							</nav>
							<nav className="w-full">
								<button className="my-1 w-1/2 h-8 bg-red-2 rounded-2xl">Listen now</button>
								<button className="my-1 w-3/4 h-8 border-2 rounded-2xl border-opacity-50">
									Add to favorites
								</button>
							</nav>
						</nav>
						<nav className="w-1/2 h-52">
							{/* img cart slider */}
							<img src={item.face_image} alt={item.name} />
						</nav>
					</nav>
				))}
			</Slider>
		</nav>
	);
};

export default SMainPlaylist;
