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

function Card({ titleText, titleDesc }) {
	// const { titleText, titleDesc } = props; // object destructing
	return (
		<>
			<div className="card">
				<h3 className="cardTitle"> {titleText} </h3>
				<p className="cardDesc"> {titleDesc} </p>
				<p className="cardFooter">
					{" "}
					{dateName + "/" + monthName + "/" + currentYear}{" "}
				</p>
			</div>
		</>
	);
}

export default Card;
