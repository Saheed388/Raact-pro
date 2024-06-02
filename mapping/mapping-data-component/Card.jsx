import React from "react";
import App from "./App";
import Avater from "./avater";
import { Custommail, Customphone } from "./Custom";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p> {props.id}</p>
        <h2 className="name">{props.name}</h2>
        {/* bringing in the avater file here for reuse purpose */}
        <Avater img={props.img} />
      </div>
      <div className="bottom">
        <Customphone phone={props.phone} />
        <Custommail email={props.email} />
      </div>
    </div>
  );
}

export default Card;
