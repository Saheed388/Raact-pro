import React, { useState } from "react";

function App() {
  const [toDo, setToDo] = useState(""); // Initialize with an empty string
  const [toDoList, setToDoList] = useState([]); // Initialize an empty array for the to-do list

  function handleChange(event) {
    setToDo(event.target.value);
  }

  function handleClick() {
    setToDoList((prevList) => {
      return [...prevList, toDo]; // Add the new to-do item to the list
    });
    setToDo(""); // Clear the input field after adding the item
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={toDo} /> {}
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoList.map((item, index) => (
            <li key={index}>{item}</li> // Render each to-do item as a list item
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;



//HER OWN SOLUTION

import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
