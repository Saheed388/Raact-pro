import React, { useState } from "react";
import "../form.css"

function RegistrationForm() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const [clickFname, setClickFname] = useState("");
  const [clickLname, setClickLname] = useState("");
  const [clickEmail, setClickEmail] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setContact((prevValue) => {
      return { ...prevValue, [inputName]: newValue };
    });
  }

  function handleClick(event) {
    setClickFname(contact.fName);
    setClickLname(contact.lName);
    setClickEmail(contact.email);

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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
