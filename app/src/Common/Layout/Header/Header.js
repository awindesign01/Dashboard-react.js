import SNotification from "../../Components/SHeader/SNotification";
import SSearchHeader from "../../Components/SHeader/SSearchHeader";

const Header = () => {
	return (
		<section className="container h-16 flex justify-between">
			<article className="w-2/5 md:w-1/5 lg:w-15% xl:w-12% h-full flex items-center bg-transparent lg:bg-black-1">
				<nav className="mx-auto w-95%">
					<h1 className="text-white text-opacity-90 font-bold text-xl tracking-wider">
						Awin Design
					</h1>
				</nav>
			</article>
			<article className="w-60% md:w-4/5 lg:w-85% xl:w-88% h-full flex justify-end md:justify-end items-center">
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
