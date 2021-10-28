import { useMediaQuery } from "react-responsive";
import ForLaptopComponents from "./ForLaptopComponents";
import ForLargeLaptopComponents from "./ForLargeLaptopComponents";
import ForPhoneComponents from "./ForPhoneComponents";
import ForTabletComponents from "./ForTabletComponents";

const SPopularSreaming = () => {
	let forPhone = useMediaQuery({ query: "(max-width: 640px)" });
	let forTablet = useMediaQuery({ query: "(min-width: 640px)" });
	let forLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
	// const forLargeLaptop = useMediaQuery({ query: "(min-width: 1280px)" });

	return (
		<>
			{forPhone ? (
				<ForPhoneComponents />
			) : forLaptop ? (
				<ForLaptopComponents />
			) : forTablet ? (
				<ForTabletComponents />
			) : (
				<ForLargeLaptopComponents />
			)}
			;
		</>
	);
};

export default SPopularSreaming;
