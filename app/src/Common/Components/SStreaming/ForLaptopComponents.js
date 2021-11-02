import { itemPosters } from "./DatasPoster";

// section streaming component popular for laptop
const ForLaptop = () => {
	return (
		<>
			{itemPosters.map((e) => (
				<nav
					className="ForLaptop mb-3 bg-red-2 text-white font-bold rounded-xl"
					style={{
						backgroundImage: `url(${e.img})`,
						backgroundSize: "cover",
						width: "23%",
						height: "13rem",
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
						<p className="text-xs">{e.data} Movie play</p>
						<p className="text-xxs">{e.followers}K followers</p>
					</nav>
				</nav>
			))}
		</>
	);
};

export default ForLaptop;
