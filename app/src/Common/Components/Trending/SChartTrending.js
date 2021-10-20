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
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Feb",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Mar",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Apr",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "May",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "June",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Aug",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "Sep",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "Oct",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "Nov",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "Dec",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

const SCharTrending = () => {
	return (
		<nav className="h-full w-63.5% bg-gray-700 rounded-xl flex flex-col justify-between">
			<nav>
				<nav>
					<p>Your work summary</p>
				</nav>
				<nav></nav>
				<nav></nav>
			</nav>
			<ResponsiveContainer width="100%" height="80%" className="">
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
					<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
				</LineChart>
			</ResponsiveContainer>
		</nav>
	);
};

export default SCharTrending;
