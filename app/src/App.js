import "./App.css";
import Main from "./Common/Components/Main/Main";
import Header from "./Common/Layout/Header/Header";
import Sidebar from "./Common/Layout/Sidebar/Sidebar";

function App() {
	return (
		<section className="App">
			<article className="w-full h-16">
				<Header />
			</article>
			<article className="w-full h-43rem flex justify-start">
				<Sidebar />
				<Main />
			</article>
		</section>
	);
}

export default App;
