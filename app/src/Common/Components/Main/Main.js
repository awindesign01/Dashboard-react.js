import { Route } from "react-router-dom";
import routes from "../../../routes/routes";

const Main = () => {
	return (
		<section className="lg:w-85% xl:w-88% h-full">
			{routes.map((r) => (
				<Route {...r} key={r.path}/>
				))}
		</section>
	);
};

export default Main;
