import Image1 from "../../../Assets/image/11.jfif";
import Image2 from "../../../Assets/image/22.jfif";
import Image3 from "../../../Assets/image/33.jfif";
import Image4 from "../../../Assets/image/44.jfif";
import userImage3 from "../../../Assets/image/userImage/32.jpg";
import userImage4 from "../../../Assets/image/userImage/45.jpg";
import userImage5 from "../../../Assets/image/userImage/50.jpg";
import userImage6 from "../../../Assets/image/userImage/60.jpg";
import AOS from "aos";

const CartItem = [
	{
		id: 1,
		bgImage: Image1,
		name: "Awin Design",
		content: "53.1K views - 2 weeks ago",
		userImage: userImage3,
		data_aos_delay: 1000,
	},
	{
		id: 2,
		bgImage: Image2,
		name: "Awin Design",
		content: "27.8K views - 3 weeks ago",
		userImage: userImage6,
		data_aos_delay: 1300,
	},
	{
		id: 3,
		bgImage: Image3,
		name: "Awin Design",
		content: "36.5K views - 3 days ago",
		userImage: userImage5,
		data_aos_delay: 1600,
	},
	{
		id: 4,
		bgImage: Image4,
		name: "Awin Design",
		content: "86K views - 4 weeks ago",
		userImage: userImage4,
		data_aos_delay: 1900,
	},
];

const SWatched = () => {
	AOS.init();
	return (
		<>
			{CartItem.map((e) => (
				<nav
					className="w-64 h-full bg-black-1 rounded-2xl"
					key={e.id}
					data-aos="fade-right"
					data-aos-duration="700"
					data-aos-easing="ease-in-out"
					data-aos-delay={e.data_aos_delay}
				>
					<nav>
						<img src={e.bgImage} alt="cart-img" className="bg-50% rounded-tl-2xl rounded-tr-2xl" />
					</nav>
					<nav className="w-full h-14 flex justify-evenly items-end relative bottom-4">
						<nav>
							<p className="text-white text-lg font-bold tracking-wider">{e.name}</p>
						</nav>
						<nav>
							<nav className="h-14 w-14 border-2 border-opacity-40 rounded-full grid place-items-center">
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
