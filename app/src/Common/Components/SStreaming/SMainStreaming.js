import React from "react";
import MainStreaming from "./MainStreaming";
import SSubsidiaryStreaming from "./SSubsidiaryStreaming";
import Streams from "./Streams";
// import aos from "aos";

const itemsOverflow = [
	{
		img: "../../../Assets/ImageSStreaming/images.jfif",
		nameStreamer: "Awin Design",
		countryStreamer: "Iran",
		time: "13:25:00",
		id: 1,
	},
	{
		img: "../../../Assets/ImageSStreaming/images.jfif",
		nameStreamer: "Awin Design",
		countryStreamer: "Iran",
		time: "13:25:00",
		id: 1,
	},
	{
		img: "../../../Assets/ImageSStreaming/images-(1).jfif",
		nameStreamer: "Awin Design",
		countryStreamer: "USA",
		time: "5:26:35",
		id: 2,
	},
	{
		img: "../../../Assets/ImageSStreaming/people-raising-hands-concert_249578-737.jpg",
		nameStreamer: "Awin Design",
		countryStreamer: "GER",
		time: "6:14:55",
		id: 3,
	},
];

const SMainStreaming = () => {
	return (
		<React.Fragment>
			<nav className="w-full lg:w-2/3 h-auto md:flex justify-between lg:justify-around items-center">
				<MainStreaming />
				<Streams itemsOverflow={itemsOverflow} />
			</nav>
			<nav className="w-full h-full lg:w-30%">
				<SSubsidiaryStreaming />
			</nav>
		</React.Fragment>
	);
};

export default SMainStreaming;
