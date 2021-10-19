import Image1 from "../../../Assets/image/11.jfif";
import Image2 from "../../../Assets/image/22.jfif";
import Image3 from "../../../Assets/image/33.jfif";
import Image4 from "../../../Assets/image/44.jfif";
import userImage3 from "../../../Assets/image/userImage/32.jpg";
import userImage4 from "../../../Assets/image/userImage/45.jpg";
import userImage5 from "../../../Assets/image/userImage/50.jpg";
import userImage6 from "../../../Assets/image/userImage/60.jpg";

const CartItem = [
	{
		bgImage: Image1,
		name: "Awin Design",
		content: "53.1K views - 2 weeks ago",
		userImage: userImage3,
	},
	{
		bgImage: Image2,
		name: "Awin Design",
		content: "27.8K views - 3 weeks ago",
		userImage: userImage6,
	},
	{
		bgImage: Image3,
		name: "Awin Design",
		content: "36.5K views - 3 days ago",
		userImage: userImage5,
	},
	{
		bgImage: Image4,
		name: "Awin Design",
		content: "86K views - 4 weeks ago",
		userImage: userImage4,
	},
];

const SWatched = () => {
	return (
		<>
			{CartItem.map((e) => (
				<nav className="w-64 h-full bg-gray-700 rounded-2xl">
					<nav>
						<img src={e.bgImage} alt="cart-img" className="bg-50% rounded-tl-2xl rounded-tr-2xl" />
					</nav>
					<nav className="w-full h-14 flex justify-evenly items-end relative bottom-4">
						<nav>
							<p className="text-white text-lg font-bold tracking-wider">{e.name}</p>
						</nav>
						<nav>
							<nav className="h-14 w-14 border-2 rounded-full grid place-items-center">
								<img src={e.userImage} alt="user" className="h-12 w-12 rounded-full" />
							</nav>
						</nav>
					</nav>
					<nav>
						<h2 className="text-center text-white text-opacity-40">{e.content}</h2>
					</nav>
				</nav>
			))}
		</>
	);
};

export default SWatched;
