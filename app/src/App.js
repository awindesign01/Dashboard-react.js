import "./App.css";
import FebButton from "./Common/Components/FAB_Button/FabButton";
import Main from "./Common/Components/Main/Main";
import Header from "./Common/Layout/Header/Header";
import Sidebar from "./Common/Layout/Sidebar/Sidebar";

function App(props) {
	// console.log(props);
	return (
		<section>
			<article className="App mx-auto w-95% lg:w-full">
				<article className="w-full h-16">
					<Header />
				</article>
				<article className="w-full lg:h-43rem flex justify-start ">
					<Sidebar />
					<Main />
				</article>
			</article>
			<article className="lg:hidden fixed bottom-5 w-95% md:w-98% h-14 bg-transparent flex justify-end items-end">
				<FebButton />
			</article>
		</section>
	);
}

export default App;
