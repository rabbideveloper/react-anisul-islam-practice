import "./App.css";
import Card from "./components/Card";

function App() {
	return (
		<>
			<h1 className="headingStyle largeText" /**style={headingStyle} */>
				{" "}
				Todo App{" "}
			</h1>
			<Card />
			<Card />
			<Card />
		</>
	);
}

export default App;
