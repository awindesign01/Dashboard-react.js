import SNotification from "../../Components/SMainHeader/SNotification";
import SSearchHeader from "../../Components/SMainHeader/SSearchHeader";

const Header = () => {
	return (
		<section className="w-full h-16 flex justify-around">
			<article className="pl-2 w-1/6 h-full grid place-items-center justify-start">
				<h1 className="text-white text-opacity-90 font-bold text-3xl">skateboard</h1>
			</article>
			<article className="w-5/6 h-full flex items-center">
				<SSearchHeader />
				<SNotification />
			</article>
		</section>
	);
};

export default Header;
