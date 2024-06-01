import React, { useState } from "react";

function App() {
  const [fName, setfName] = useState();
  const [lName, setlName] = useState();
  const [clickFname, setClickFname] = useState();
  const [clickLname, setClickLname] = useState();

  function handleFname(event) {
    setfName(event.target.value);
  }

  function handleLname(event) {
    setlName(event.target.value);
  }

  function handleClick() {
    setClickFname(fName);
    setClickLname(lName);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {clickFname} {clickLname}
      </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleFname}
          name="fName"
          placeholder="First Name"
          value={fName}
        />
        <input
          onChange={handleLname}
          name="lName"
          placeholder="Last Name"
          value={lName}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;


// ALTERNATIVE WAY TO SOLVE THE ISSUE

import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name; // This should be event.target.name

    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName} // Uncommented this line
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName} // Uncommented this line
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;


// ALTERNATIVE WAY
import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name; // This should be event.target.name

    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          ...prevValue,
          fName: newValue,
        };
      } else if (inputName === "lName") {
        return {
          ...prevValue,
          lName: newValue,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName} // Uncommented this line
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName} // Uncommented this line
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
