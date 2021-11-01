import { useMediaQuery } from "react-responsive";
import SRecentlyPlayedLaptop from "./SRecentlyPlayedLaptop";
import SRecentlyPlayedLargeLaptop from "./SRecentlyPlayedLargeLaptop";
import SRecentlyPlayedPhone from "./SRecentlyPlayedPhone";
import SRecentlyPlayedTablet from "./SRecentlyPlayedTablet";

const RecentlyMain = () => {
	let forPhone = useMediaQuery({ query: "(max-width: 640px)" });
	let forTablet = useMediaQuery({ query: "(min-width: 640px)" });
	let forLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
	// const forLargeLaptop = useMediaQuery({ query: "(min-width: 1280px)" });

	return (
		<>
			{forPhone ? (
				<SRecentlyPlayedPhone />
			) : forLaptop ? (
				<SRecentlyPlayedLaptop />
			) : forTablet ? (
				<SRecentlyPlayedTablet />
			) : (
				<SRecentlyPlayedLargeLaptop />
			)}
			;
		</>
	);
};

export default RecentlyMain;
