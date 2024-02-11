import "./App.css";
import Card from "./components/Card";
import Data from "./data.json";

function App() {
	// for loop use
	// let items = [];
	// for (let x = 0; x < Data.length; x++) {
	// 	items.push(<Card titleText={Data[x].title} titleDesc={Data[x].desc} />);
	// }

	// Map function use
	// let items = [];
	// items = Data.map((item) => (
	// 	<Card key={item.title} titleText={item.title} titleDesc={item.desc} />
	// ));

	return (
		<>
			<h1 className="headingStyle largeText" /**style={headingStyle} */>
				{" "}
				Todo App{" "}
			</h1>
			{Data.map((item, index) => (
				<Card
					key={index}
					titleText={item.title}
					titleDesc={item.desc}
				/>
			))}
		</>
	);
}

export default App;
