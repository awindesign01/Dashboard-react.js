import SNotificationLaptop from "./SNotificationLaptop";
import SNotificationPhone from "./SNotificationPhone";

const SNotification = () => {
	return (
		<nav className="w-2/3 h-full flex justify-end items-center md:justify-end">
			{/* section notification for phone and tablet */}
			<nav className="block lg:hidden w-auto h-auto ">
				<SNotificationPhone />
			</nav>
			{/* section notification for laptop and desktop */}
			<nav className="hidden w-full h-full lg:flex justify-end">
				<SNotificationLaptop />
			</nav>
		</nav>
	);
};

export default SNotification;
