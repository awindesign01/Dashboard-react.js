import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FadingBalls } from "react-cssfx-loading";

const SubsidiaryNews = () => {
	const [GetApi, setGetApi] = useState(null);

	useEffect(() => {
		axios
			.get(
				"https://newsapi.org/v2/everything?q=tesla&from=2021-10-03&sortBy=publishedAt&apiKey=e92fc57bc2844a83a490f1121bdf1158",
			)
			.then((res) => setGetApi(res.data.articles.slice(0, 6)))
			.catch((err) => console.log(err));
	}, []);
	console.log(GetApi);

	return (
		<nav className="w-full h-auto lg:h-60 rounded-2xl md:flex md:flex-wrap overflow-y-scroll">
			{GetApi ? (
				GetApi.map((i) => (
					<nav className="mx-auto mt-3 w-90% md:w-45% h-52 md:h-48 xl:w-30% text-white font-bold bg-black-3 border-2 border-black-3 border-opacity-40 rounded-2xl flex flex-col justify-center">
						<nav className="mx-auto w-11/12 h-1/5 ">
							<h1>author : {i.author}</h1>
						</nav>
						<nav className="mx-auto w-11/12 h-3/5 ">
							<p>{i.title}</p>
						</nav>
						<nav className="mx-auto w-11/12 h-1/5 flex items-center">
							<nav className="w-10 h-90% border-dashed border-2 rounded-full">
								<AiOutlineUser className="w-full h-full" />
							</nav>
							<p className="ml-2">{i.source.name}</p>
						</nav>
					</nav>
				))
			) : (
				<FadingBalls color="#FFFFFF" width="10px" height="10px" duration="0.5s" />
			)}
		</nav>
	);
};

export default SubsidiaryNews;
