import React, { useState } from "react";
import TodoItems from "./Todoitem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
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
          {items.map((todoItem) => (
            <TodoItems text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;


// EXPLANATION 

import React, { useState } from "react"; // Import React and the useState hook from the React library
import TodoItems from "./Todoitem"; // Import the TodoItems component from the Todoitem file

function App() { // Define the App component
  const [inputText, setInputText] = useState(""); // Declare state variable inputText, initialized to an empty string
  const [items, setItems] = useState([]); // Declare state variable items, initialized to an empty array

  function handleChange(event) { // Define the handleChange function
    const newValue = event.target.value; // Get the value from the input field
    setInputText(newValue); // Update the inputText state with the new value
  }

  function addItem() { // Define the addItem function
    setItems((prevItems) => { // Update the items state
      return [...prevItems, inputText]; // Add the new inputText to the previous items array
    });
    setInputText(""); // Clear the input field
  }

  function deleteItem(id) { // Define the deleteItem function
    setItems((prevItems) => { // Update the items state
      return prevItems.filter((item, index) => { // Filter out the item with the matching index
        return index !== id; // Return true for items that do not match the id
      });
    });
  }

  return ( // Return the JSX to render the component
    <div className="container"> {/* Container div for the to-do app */}
      <div className="heading"> {/* Div for the heading */}
        <h1>To-Do List</h1> {/* Heading text */}
      </div>
      <div className="form"> {/* Div for the form elements */}
        <input onChange={handleChange} type="text" value={inputText} /> {/* Input field for the to-do item */}
        <button onClick={addItem}> {/* Button to add the to-do item */}
          <span>Add</span> {/* Button text */}
        </button>
      </div>
      <div> {/* Div for the list of to-do items */}
        <ul> {/* Unordered list */}
          {items.map((todoItem, index) => ( // Map over the items array to render each to-do item
            <TodoItems
              key={index} // Unique key for each item
              id={index} // Pass the index as the id prop
              text={todoItem} // Pass the to-do item text as the text prop
              onChecked={deleteItem} // Pass the deleteItem function as the onChecked prop
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App; // Export the App component as the default export
