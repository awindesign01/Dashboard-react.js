import ImageUser1 from "../../../Assets/image/userImage/84.jpg";
import ImageUser2 from "../../../Assets/image/userImage/70.jpg";
import ImageUser3 from "../../../Assets/image/userImage/60.jpg";
import React, { useState } from "react";

const SFollowingPlaylist = () => {
	const [isShow, setisShow] = useState(true);

	const following = [
		{
			image: <ImageUser1 />,
			name: "Awin Design",
			followers: "407,192",
			styleButton: (
				<nav className="w-30% h-full grid place-items-center" onClick={() => setisShow(!isShow)}>
					{isShow ? (
						<button className="w-full h-60% bg-red-2 rounded-full font-bold tracking-wider">
							Follow
						</button>
					) : (
						<button className="w-full h-60% bg-red-2 bg-opacity-50 rounded-full font-bold tracking-wider">
							Following
						</button>
					)}
				</nav>
			),
			buttonID: 1,
		},
		{
			image: <ImageUser2 />,
			name: "Awin Design",
			followers: "407,192",
			styleButton: (
				<nav className="w-30% h-full grid place-items-center" onClick={() => setisShow(!isShow)}>
					{isShow ? (
						<button className="w-full h-60% bg-red-2 rounded-full font-bold tracking-wider">
							Follow
						</button>
					) : (
						<button className="w-full h-60% bg-red-2 bg-opacity-50 rounded-full font-bold tracking-wider">
							Following
						</button>
					)}
				</nav>
			),
			buttonID: 2,
		},
		{
			image: <ImageUser3 />,
			name: "Awin Design",
			followers: "407,192",
			styleButton: (
				<nav className="w-30% h-full grid place-items-center" onClick={() => setisShow(!isShow)}>
					{isShow ? (
						<button className="w-full h-60% bg-red-2 rounded-full font-bold tracking-wider">
							Follow
						</button>
					) : (
						<button className="w-full h-60% bg-red-2 bg-opacity-50 rounded-full font-bold tracking-wider">
							Following
						</button>
					)}
				</nav>
			),
			buttonID: 3,
		},
		{
			image: <ImageUser3 />,
			name: "Awin Design",
			followers: "407,192",
			styleButton: (
				<nav className="w-30% h-full grid place-items-center" onClick={() => setisShow(!isShow)}>
					{isShow ? (
						<button className="w-full h-60% bg-red-2 rounded-full font-bold tracking-wider">
							Follow
						</button>
					) : (
						<button className="w-full h-60% bg-red-2 bg-opacity-50 rounded-full font-bold tracking-wider">
							Following
						</button>
					)}
				</nav>
			),
			buttonID: 4,
		},
	];

	// const filterButton = (event) => {
	// 	const filteredbutton = following.find((i) => i.buttonID === event);
	// 	if (filteredbutton) {
	// 		return (
	// 			<button className="w-full h-60% bg-red-2 rounded-full font-bold tracking-wider">
	// 				Follow
	// 			</button>
	// 		);
	// 	} else {
	// 		return (
	// 			<button className="w-full h-60% bg-red-2 bg-opacity-50 rounded-full font-bold tracking-wider">
	// 				Following
	// 			</button>
	// 		);
	// 	}
	// };

	return (
		<>
			<nav>
				<h1 className="block md:hidden my-4 text-xl text-white font-bold tracking-wider">
					Followers
				</h1>
			</nav>
			<nav className="h-52 w-full md:w-1/3 bg-black-1 rounded-2xl overflow-y-scroll">
				{following.map((e) => (
					<nav
						className="mx-auto mt-3 w-95% h-16 md:h-12 flex justify-around items-center text-white font-bold"
						key={e.buttonID}
					>
						<nav className="w-1/5 h-full">
							<img
								src={e.image}
								alt="img_user"
								className="p-1 w-full h-full rounded-full border-2 border-dashed"
							/>
						</nav>
						<nav className="px-2 w-1/2 h-full flex flex-col justify-around">
							<p className="text-xl md:text-sm">{e.name}</p>
							<p className="text-sm md:text-xs text-gray-300 text-opacity-50">
								{e.followers} followers
							</p>
						</nav>
						{/* {e.styleButton} */}
						{/* {filterButton(e.buttonID)} */}
						<nav
							className="w-30% h-full grid place-items-center"
							onClick={() => setisShow(!isShow)}
							// onClick={() => filterButton(e.buttonID)}
						>
							{isShow ? (
								<button className="w-full h-60% bg-red-2 rounded-full md:text-xs font-bold tracking-wider">
									Follow
								</button>
							) : (
								<button className="w-full h-60% bg-red-2 bg-opacity-50 rounded-full md:text-xs font-bold tracking-wider">
									Following
								</button>
							)}
						</nav>
					</nav>
				))}
			</nav>
		</>
	);
};

export default SFollowingPlaylist;
