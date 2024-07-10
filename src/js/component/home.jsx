import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [chosenColor, setChosenColor] = useState("glow");
	return (
		<>
		<div className= "trafficlighttop"></div>
		<div className="trafficlight">
			<div className =" light red"></div>
			<div className =" light yellow"></div>
			<div className =" light green"></div>
		</div>
		</>
	);
};

export default Home;
