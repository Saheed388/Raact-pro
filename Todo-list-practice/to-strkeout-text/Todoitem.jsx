import React, { useState } from "react";

function TodoItems(props) {
  const [isDone, setIsDone] = useState(false);

  function strikeOut() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={strikeOut}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default TodoItems;
