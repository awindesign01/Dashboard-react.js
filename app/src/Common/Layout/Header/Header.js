import SNotification from "../../Components/SMainHeader/SNotification";
import SSearchHeader from "../../Components/SMainHeader/SSearchHeader";

const Header = () => {
	return (
		<section className="container h-16 flex justify-around">
			<article className="w-2/5 md:w-1/5 lg:w-15% h-full grid place-items-center justify-start ">
				<h1 className="text-white text-opacity-90 font-bold text-xl md:text-2xl tracking-wider">Dashboard</h1>
			</article>
			<article className="w-60% md:w-4/5 h-full flex justify-end md:justify-end items-center">
				<SSearchHeader />
				<SNotification />
			</article>
			{/* <article className="w-5/6 h-full flex justify-between items-center">
				<SNotification />
			</article> */}
		</section>
	);
};

export default Header;
