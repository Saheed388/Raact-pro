// first attemt

import React from "react";

let isLogIn = false;

function renderConditionally() {
  if (isLogIn === true) {
    return <h1>Hello</h1>;
  } else {
    return (
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;


// AFTER SEPERATING THE FILE MEANING CREATING FORM AND INPUT FILE

import React from "react";
import Form from "./Form"
import Input from "./Input"

let isLogIn = false;

function renderConditionally() {
  if (isLogIn === true) {
    return <h1>Hello</h1>;
  } else {
    return <Form/>  
     
    
  }
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;

// NOW I WANT TO MAKE THE CODE MORE SHOTER  SO I WILL CONVER THE IF ELSE STATEMENT TO AN EXPRESSION

import React from "react";
import Form from "./Form";
import Input from "./Input";

let isLogIn = false;



function App() {
  return (
    <div className="container">
     { isLogIn === true ? <h1>Hello</h1> : <Form />}
    </div>
  );
}

export default App;

// CAN ALSO STILL WORK THIS WAY  TO MAKE THE ELSE NULL

import React from "react";
import Form from "./Form";
import Input from "./Input";


const currentTime = new Date().getHours();

function App() {

    return   currentTime < 20? <h1> Why are you still up working</h1> : null
    // CAN ALSO BE WRITTEN 
    return   currentTime < 20 && <h1> Why are you still up working</h1> 



}

export default App;
