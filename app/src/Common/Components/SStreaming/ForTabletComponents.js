import { itemPosters } from "./DatasPoster";

// section streaming component popular for tablet
const ForTablet = () => {
	return (
		<>
			{itemPosters.map((e) => (
				<nav
					className="ForTablet mb-3 text-white font-bold border-2 border-black-3 rounded-xl"
					style={{
						backgroundImage: `url(${e.img})`,
						backgroundSize: "cover",
						width: "23%",
						height: "14rem",
					}}
					key={e.name}
					data-aos="fade-down"
					data-aos-duration="700"
					data-aos-delay={e["data-aos-delay"]}
					data-aos-easing="ease-in-out"
				>
					<nav className="w-full h-2/3 bg-transparent"></nav>
					<nav className="px-1 w-full h-1/3 bg-black-3 bg-opacity-70 rounded-bl-xl rounded-br-xl">
						<p className="text-lg">{e.name}</p>
						<p className="text-sm">{e.data} Movie play</p>
						<p className="text-xs">{e.followers}K followers</p>
					</nav>
				</nav>
			))}
		</>
	);
};

export default ForTablet;
