import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [chosenColor, setChosenColor] = useState("red");
	return (
		<>
		<div className= "trafficlighttop"></div>
		<div className="trafficlight">
			<div
			onClick={() => setChosenColor("red")}
			className ={"light red" + ((chosenColor === "red") ? "glow" : "")

			}></div>
			<div 
			onClick={() => setChosenColor("yellow")}
			className = {"light yellow" + ((chosenColor === "yellow") ? "glow" : "")}></div>
			<div 
			onClick={() => setChosenColor("green")}
			className = {"light green" + ((chosenColor === "green") ? "glow" : "")}></div>
		</div>
		</>
	);
};

export default Home;
