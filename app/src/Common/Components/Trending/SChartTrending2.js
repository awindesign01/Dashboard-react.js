import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		subject: "Problem Solving",
		A: 110,
		B: 110,
		fullMark: 150,
	},
	{
		subject: "Math",
		A: 110,
		B: 110,
		fullMark: 150,
	},
	{
		subject: "Coding",
		A: 120,
		B: 120,
		fullMark: 150,
	},
	{
		subject: "Management",
		A: 90,
		B: 90,
		fullMark: 150,
	},
	{
		subject: "Graphic",
		A: 100,
		B: 100,
		fullMark: 150,
	},
	{
		subject: "Creativity",
		A: 100,
		B: 100,
		fullMark: 150,
	},
];

const SChartTrending = () => {
	return (
		<nav
			className="h-full w-30% bg-black-1 rounded-xl flex flex-col justify-between"
			data-aos="fade-right"
			data-aos-duration="500"
			data-aos-delay="700"
			data-aos-easing="ease-in-out"
		>
			{/* <nav className="h-15%">
				<nav className="mx-auto w-11/12 flex flex-col justify-center items-center">
					<p className="text-white font-bold text-sm">Your work summary</p>
					<p className="text-white font-bold text-sm text-opacity-40">Jan- Dec</p>
				</nav>
			</nav>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
					<PolarGrid />
					<PolarAngleAxis dataKey="subject" />
					<PolarRadiusAxis />
					<Radar
						name="Mike"
						dataKey="A"
						stroke="rgba(239, 68, 60)"
						fill="rgba(239, 68, 70)"
						fillOpacity={0.6}
					/>
				</RadarChart>
			</ResponsiveContainer> */}
		</nav>
	);
};

export default SChartTrending;
