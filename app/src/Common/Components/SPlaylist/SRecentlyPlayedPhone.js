import { DataPosterMusic } from "./DataPosterMusic";

const SRecentlyPlayedPhone = () => {
	return (
		<>
			{DataPosterMusic.map((i) => (
				<nav
					className="forPhone mb-3 text-white font-bold border-2 border-black-3 rounded-xl"
					style={{
						backgroundImage: `url(${i.bg_image})`,
						backgroundSize: "cover",
						width: "45%",
						height: "14rem",
					}}
					key={i.id}
				>
					<nav className="w-full h-2/3 bg-transparent"></nav>
					<nav className="px-1 w-full h-1/3 bg-black-3 bg-opacity-80 rounded-bl-xl rounded-br-xl">
						<p className="text-lg">{i.name}</p>
						<p className="text-xs">{i.musicName}</p>
					</nav>
				</nav>
			))}
		</>
	);
};

export default SRecentlyPlayedPhone;
