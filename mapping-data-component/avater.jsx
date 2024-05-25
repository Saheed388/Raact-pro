import React from "react";
import Card from "./Card";

function Avater(props) {
  return <img className="circle-img" src={props.img} alt="{props.alt}" />;
}

export default Avater;
