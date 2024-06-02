




import React from "react";
import ReactDOM from "react-dom";

function Notifictions() {
  const [count, setCount] = React.useState(0);
  // The count is the value userState, setCount is a function.
  //which will be use to update the value in our state
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
export default Notifictions;
