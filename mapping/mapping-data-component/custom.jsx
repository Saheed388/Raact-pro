import React from "react";

function Custommail(props) {
  return <p className="info">{props.email}</p>;
}

function Customphone(props) {
  return <p className="info">{props.phone}</p>;
}

export { Custommail, Customphone };
