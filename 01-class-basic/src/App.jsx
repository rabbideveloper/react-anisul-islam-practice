import "./App.css";

function App() {
	const todoTitle = "Call Family";
	const todoDescription =
		"Lorem, ipsum dolor sit amet consectetur adipisicing elit Debitis, beatae.";
	const date = new Date();
	const dateName = date.getDate();
	const monthName = date.getMonth();
	const currentYear = date.getFullYear();

	// const headingStyle = {
	// 	backgroundColor: "purple",
	// 	color: "white",
	// 	fontSize: "3rem",
	// 	textAlign: "center",
	// 	padding: "15px",
	// };

	return (
		<>
			<h1 className="headingStyle largeText" /**style={headingStyle} */>
				{" "}
				Todo App{" "}
			</h1>
			<h3> {todoTitle} </h3>
			<p> {todoDescription} </p>
			<p> {dateName + "/" + monthName + "/" + currentYear} </p>
		</>
	);
}

export default App;
