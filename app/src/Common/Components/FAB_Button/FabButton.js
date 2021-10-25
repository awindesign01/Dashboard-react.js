import React, { useState } from "react";

import { HiOutlinePlus } from "react-icons/hi";
import MenuPhone from "../Menu/MenuPhone";

const FebButton = () => {
	const [ShowMenu, setShowMenu] = useState(true);
	return (
		<>
			<button
				className="w-14 h-14 bg-red-500 rounded-full grid place-items-center z-20"
				onClick={() => setShowMenu(!ShowMenu)}
			>
				{ShowMenu ? (
					<HiOutlinePlus className="text-3xl text-white transform rotate-45" />
				) : (
					<HiOutlinePlus className="text-3xl text-white" />
				)}
			</button>
			{ShowMenu && <MenuPhone />}
		</>
	);
};

export default FebButton;
