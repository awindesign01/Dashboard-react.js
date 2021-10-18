import Image1 from "../../../Assets/image/22.jfif";
import userImage3 from "../../../Assets/image/userImage/32.jpg";

const CartItem = [
	{
		bgImage: "",
		name: "Andy William",
		title: "Basic how to ride your skateboard comfort's",
		content: "53K views - 2 weeks ago",
		img: "",
	},
];

const SWatched = () => {
	return (
		<nav className="w-64 h-full bg-gray-700 rounded-2xl">
			{/* <nav>
				<img src={Image1} alt="cart-img" className="bg-50% rounded-tl-2xl rounded-tr-2xl" />
			</nav>
			<nav className="flex">
				<nav>
					<p>Andy William</p>
				</nav>
				<nav>
					<nav className="h-12 w-12 border rounded-full grid place-items-center">
						<img src={userImage3} alt="user" className="h-10 w-10 rounded-full" />
					</nav>
				</nav>
			</nav>
			<nav>
				<h2>Basic how to ride your skateboard comfort's</h2>
			</nav> */}
		</nav>
	);
};

export default SWatched;
