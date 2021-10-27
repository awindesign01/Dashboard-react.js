import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "Jan",
		"Learn / h": 12,
		"Programming / h": 8,
		amt: 2400,
	},
	{
		name: "Feb",
		"Learn / h": 8,
		"Programming / h": 6,
		amt: 2210,
	},
	{
		name: "Mar",
		"Learn / h": 2,
		"Programming / h": 2,
		amt: 2290,
	},
	{
		name: "Apr",
		"Learn / h": 8,
		"Programming / h": 12,
		amt: 2000,
	},
	{
		name: "May",
		"Learn / h": 7,
		"Programming / h": 5,
		amt: 2181,
	},
	{
		name: "June",
		"Learn / h": 7,
		"Programming / h": 7,
		amt: 2500,
	},
	{
		name: "Aug",
		"Learn / h": 6,
		"Programming / h": 8,
		amt: 2100,
	},
	{
		name: "Sep",
		"Learn / h": 6,
		"Programming / h": 5,
		amt: 2100,
	},
	{
		name: "Oct",
		"Learn / h": 8,
		"Programming / h": 6,
		amt: 2100,
	},
	{
		name: "Nov",
		"Learn / h": 2,
		"Programming / h": 7,
		amt: 2100,
	},
	{
		name: "Dec",
		"Learn / h": 8,
		"Programming / h": 2,
		amt: 2100,
	},
];

const SCharTrending = () => {
	return (
		<nav
			className="mb-2 h-80 w-full md:w-63.5% bg-black-1 rounded-xl flex flex-col justify-between"
			data-aos="fade-right"
			data-aos-duration="500"
			data-aos-delay="500"
			data-aos-easing="ease-in-out"
		>
			<nav className="h-15% flex justify-around">
				<nav className="w-2/5 h-full flex flex-col justify-center">
					<p className="text-white text-sm font-bold">Your work summary</p>
					<p className="text-white text-sm font-bold text-opacity-50">Jan - Dec</p>
				</nav>
				<nav className="w-2/5 h-full"></nav>
			</nav>
			<ResponsiveContainer width="100%" height="85%">
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="0 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="Learn / h"
						stroke="rgba(239, 68, 70)"
						activeDot={{ r: 10 }}
					/>
					<Line type="monotone" dataKey="Programming / h" stroke="rgba(252, 211, 77)" />
				</LineChart>
			</ResponsiveContainer>
		</nav>
	);
};

export default SCharTrending;
