import SCategory from "../../Components/SSidebar/SCategory";
import SMenu from "../../Components/SSidebar/SMenu";

const Sidebar = (props) => {
	return (
		<section className="lg:w-15% xl:w-12% lg:h-full hidden lg:block bg-black-1">
			<article className="mx-auto w-11/12 h-full">
				<article className="hidden lg:block">
					<SMenu />
				</article>
				<hr className="my-5 w-3/5 border-gray-700 " />
				<article className="hidden lg:block">
					<SCategory />
				</article>
			</article>
		</section>
	);
};

export default Sidebar;
