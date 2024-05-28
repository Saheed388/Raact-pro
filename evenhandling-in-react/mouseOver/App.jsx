/* MY SOLUTION */
import React, { useState } from "react";

function App() {
  const [headingText, setheadingText] = useState("Hello");
  const [mouseOver, setmouseOver] = useState("white");

  function handleClicking() {
    setheadingText("Submitted");
  }

  function handleMouseOver() {
    setmouseOver("black");
  }

  function handleMouseOut() {
    setmouseOver("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />

      <button
        onClick={handleClicking}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: mouseOver }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;


//HER OWN SOLUTION

import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
