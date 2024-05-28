// WHEN USING FORM SUBMIT

import React, { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [click, setClick] = useState();

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function handleClick(event) {
    setClick(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
      <h2>{click}</h2>
    </div>
  );
}

export default App;


//  WHEN USING INPUT FOR POST

import React, { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [click, setClick] = useState();

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function handleClick() {
    setClick(name);
  }

  return (
    <div className="container">
      <h1>Hello {click} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
      <h2></h2>
    </div>
  );
}

export default App;


