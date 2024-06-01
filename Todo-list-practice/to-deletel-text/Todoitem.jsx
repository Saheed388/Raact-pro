import React from "react";

function TodoItems(props) {
  function strikeOut() {}

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default TodoItems;
