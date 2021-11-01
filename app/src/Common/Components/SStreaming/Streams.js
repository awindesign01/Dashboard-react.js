import { WiTime4 } from "react-icons/wi";
import "./StyleShapeScroll.css";

const Streams = ({ itemsOverflow }) => {
	return (
		<nav
			className="mb-2 lg:m-0 py-2 w-full md:w-45% lg:w-45% xl:w-1/3 h-52 lg:h-60 bg-yellow-300 rounded-2xl overflow-y-scroll"
			data-aos="fade-right"
			data-aos-duration="700"
			data-aos-delay="500"
			data-aos-easing="ease-in-out"
		>
			{itemsOverflow.map((e) => (
				<nav
					className="mx-auto my-2 w-95% h-4/5 xl:h-3/4 grid place-items-center bg-yellow-400 rounded-2xl"
					key={e.id}
				>
					<nav className="w-11/12 h-5/6 flex">
						<nav className="w-2/5 h-full">
							<img
								src={e.img}
								alt="bg-img-s-streaming"
								className="bg-cover bg-no-repeat bg-right rounded-xl"
							/>
						</nav>
						<nav className="w-3/5 h-full flex flex-wrap text-white font-bold">
							<nav className="p-2 w-full h-1/2 flex flex-col justify-evenly items-start">
								<h1 className="text-xl lg:text-lg tracking-wider">{e.nameStreamer}</h1>
								<p className="text-lg tracking-wider">{e.countryStreamer}</p>
							</nav>
							<nav className="w-1/2 h-1/2 flex justify-evenly items-center">
								<WiTime4 className="text-2xl " />
								<p className="text-base md:text-sm lg:text-xs">{e.time}</p>
							</nav>
							<nav className="mx-auto w-1/2 lg:w-45% h-1/2 grid place-items-center">
								<button className="w-full h-1/2 bg-yellow-500 font-bold tracking-wider rounded-lg lg:text-xs">
									See Live
								</button>
							</nav>
						</nav>
					</nav>
				</nav>
			))}
		</nav>
	);
};

export default Streams;
