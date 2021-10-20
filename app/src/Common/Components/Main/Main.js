import { Route } from "react-router-dom";
import routes from "../../../routes/routes";

const Main = (props) => {
	console.log(props);
	return (
		<section className="w-4/5 h-full">
			{routes.map((r) => (
				<Route {...r} key={r.path}/>
				))}
		</section>
	);
};

export default Main;
