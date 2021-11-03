import { HiOutlinePlus } from "react-icons/hi";
import MainNotifiationForPhone from "./MainNotifiationForPhone";
const NotificationForPhone = () => {
	return (
		<nav className="h-full w-full top-0 right-0 bg-black-2 fixed transition-opacity z-20">
			<nav className="h-16 w-full flex justify-end">
				<nav className="h-full w-16 grid place-items-center">
					<HiOutlinePlus className="text-5xl text-red-500 transform rotate-45" />
				</nav>
			</nav>
			<nav className="w-full h-auto ">
            <MainNotifiationForPhone />
         </nav>
		</nav>
	);
};

export default NotificationForPhone;