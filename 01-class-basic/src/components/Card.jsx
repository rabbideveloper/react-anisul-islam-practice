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

function Card() {
	return (
		<div>
			<div className="card">
				<h3 className="cardTitle"> {todoTitle} </h3>
				<p className="cardDesc"> {todoDescription} </p>
				<p className="cardFooter">
					{" "}
					{dateName + "/" + monthName + "/" + currentYear}{" "}
				</p>
			</div>
		</div>
	);
}

export default Card;
