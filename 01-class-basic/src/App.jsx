import "./App.css";
import Card from "./components/Card";

function App() {
	return (
		<>
			<h1 className="headingStyle largeText" /**style={headingStyle} */>
				{" "}
				Todo App{" "}
			</h1>
			<Card
				titleText="Call Father"
				titleDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit Debitis, beatae."
			/>
			<Card
				titleText="Call Mother"
				titleDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit Debitis, beatae."
			/>
			<Card
				titleText="Call Sister"
				titleDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit Debitis, beatae."
			/>
		</>
	);
}

export default App;
