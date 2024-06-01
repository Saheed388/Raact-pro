// THE BEST WAY WITHOUT SUBMIT

import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;








// SUBMIT USING SUBMIT KEY


import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const [clickFname, setClickFname] = useState();
  const [clickLname, setClickLname] = useState();
  const [clickEmail, setClickEmail] = useState();

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name; // Corrected from event.target.value to event.target.name

    setContact((prevValue) => {
      if (inputName === "fName") {
        return { ...prevValue, fName: newValue };
      } else if (inputName === "lName") {
        return { ...prevValue, lName: newValue };
      } else if (inputName === "email") {
        return { ...prevValue, email: newValue };
      }
    });
  }

  function handleClick(event) {
    setClickFname(contact.fName); // Accessing contact state
    setClickLname(contact.lName); // Accessing contact state
    setClickEmail(contact.email); // Accessing contact state

    event.preventDefault(); // Preventing default form submission
  }

  return (
    <div className="container">
      <h1>
        Hello {clickFname} {clickLname}
      </h1>
      <p>{clickEmail}</p>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;


// DISPLAYING WITHOUT SUBMIT BUTTON
import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
