import React, { useState } from "react";
import ReactDOM from "react-dom";

// Create your first component
const Home = () => {
  const [chosenColor, setChosenColor] = useState("red");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  const cycleColor = () => {
    const currentIndex = colors.indexOf(chosenColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setChosenColor(colors[nextIndex]);
  };

  const addPurple = () => {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]);
    }
  };

  return (
    <>
      <div className="trafficlighttop"></div>
      <div className="trafficlight">
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => setChosenColor(color)}
            className={
              "light " + color + (chosenColor === color ? " glow" : "")
            }
          ></div>
        ))}
      </div>
      <button onClick={cycleColor}>Cycle Color</button>
      <button onClick={addPurple}>Add Purple</button>
    </>
  );
};

ReactDOM.render(<Home />, document.querySelector("#app"));

export default Home;
