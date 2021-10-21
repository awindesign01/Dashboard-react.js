import { BsCurrencyBitcoin } from "react-icons/bs";
import { SiEthereum, SiBitcoin, SiBinance, SiLitecoin, SiXrp } from "react-icons/si";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const Item = [
	{
		id: 1,
		name: "Bitcoin",
		brandName: "BTC",
		region: "USD",
		icon: <BsCurrencyBitcoin className="text-4xl text-yellow-1" />,
		price: "63,044.80",
		priceColor: "text-green-1",
		Process: <FiTrendingUp className="text-2xl text-green-1 " />,
		name2: "Ethereum",
		brandName2: "ETH",
		region2: "USD",
		icon2: <SiEthereum className="text-4xl text-yellow-1" />,
		price2: "4,116.54",
		priceColor2: "text-green-1",
		Process2: <FiTrendingUp className="text-2xl text-green-1 " />,
		data_aos_delay: 900,
	},
	{
		id: 2,
		name: "Bitcoin Cash",
		brandName: "BCH",
		region: "USD",
		icon: <SiBitcoin className="text-4xl text-yellow-1" />,
		price: "631.33",
		priceColor: "text-red-1",
		Process: <FiTrendingDown className="text-2xl text-red-1 " />,
		name2: "Binance Coin",
		brandName2: "BNB",
		region2: "USD",
		icon2: <SiBinance className="text-4xl text-yellow-1" />,
		price2: "474.79",
		priceColor2: "text-red-1",
		Process2: <FiTrendingDown className="text-2xl text-red-1 " />,
		data_aos_delay: 1100,
	},
	{
		id: 3,
		name: "Litecoin",
		brandName: "LTC",
		region: "USD",
		icon: <SiLitecoin className="text-4xl text-yellow-1" />,
		price: "199.94",
		priceColor: "text-red-1",
		Process: <FiTrendingDown className="text-2xl text-red-1 " />,
		name2: "Xrp",
		brandName2: "XRP",
		region2: "USD",
		icon2: <SiXrp className="text-4xl text-yellow-1" />,
		price2: "197.60",
		priceColor2: "text-green-1",
		Process2: <FiTrendingUp className="text-2xl text-green-1 " />,
		data_aos_delay: 1300,
	},
];

const SCoins = () => {
	// AOS.init();
	return (
		<nav className="w-full h-full flex justify-around items-center">
			{Item.map((i) => (
				<nav
					className="h-full w-30% bg-black-1 rounded-xl flex flex-col justify-around items-center"
					key={i.id}
					data-aos="fade-down"
					data-aos-duration="500"
					data-aos-easing="ease-in-out"
					data-aos-delay={i.data_aos_delay}
				>
					<nav className="w-11/12 h-45% flex justify-around items-center">
						<nav className="w-1/5 h-full grid place-items-center">{i.icon}</nav>
						<nav className="w-45% h-full flex flex-col justify-center">
							<p className="text-white font-bold tracking-wider">{i.name}</p>
							<p className="text-white text-sm font-bold text-opacity-40">
								{i.brandName} - {i.region}
							</p>
						</nav>
						<nav className="w-30% h-full flex flex-col justify-center items-center">
							<nav>{i.Process}</nav>
							<nav>
								<p className={`${i.priceColor} font-bold`}>$ {i.price}</p>
							</nav>
						</nav>
					</nav>
					<nav className="w-11/12 h-45% flex justify-around items-center">
						<nav className="w-1/5 h-full grid place-items-center">{i.icon2}</nav>
						<nav className="w-45% h-full flex flex-col justify-center">
							<p className="text-white font-bold tracking-wider">{i.name2}</p>
							<p className="text-white text-sm font-bold text-opacity-40">
								{i.brandName2} - {i.region2}
							</p>
						</nav>
						<nav className="w-30% h-full flex flex-col justify-center items-center">
							<nav>{i.Process2}</nav>
							<nav>
								<p className={`${i.priceColor2} font-bold`}>$ {i.price2}</p>
							</nav>
						</nav>
					</nav>
				</nav>
			))}
		</nav>
	);
};

export default SCoins;
