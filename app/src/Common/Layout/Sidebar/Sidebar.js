import SCategory from "../../Components/SMainHeader/SMainSidebar/SCategory";
import SMenu from "../../Components/SMainHeader/SMainSidebar/SMenu";

const Sidebar = () => {
	return (
		<section className="w-1/6 h-full">
			<article className="mx-auto w-11/12 h-full  ">
        <article className="">
          <SMenu />
        </article>
        <hr className="my-5 w-3/5 border-gray-700 "/>
        <article>
          <SCategory />
        </article>
      </article>
		</section>
	);
};

export default Sidebar;
