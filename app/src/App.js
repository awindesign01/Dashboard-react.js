import "./App.css";
import Header from "./Common/Layout/Header/Header";
import Sidebar from "./Common/Layout/Sidebar/Sidebar";

function App() {
	return (
		<section className="App">
			<article className="w-full h-16">
				<Header />
			</article>
			<article className="w-full h-43rem">
				<Sidebar />
			</article>
		</section>
	);
}

export default App;
