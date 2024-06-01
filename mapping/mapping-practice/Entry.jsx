import React from "react";
import emojipedia from "../emojipedia";

function Entry(props) {
  return (
    <div>
      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span className="name">{props.name}</span>
          </dt>
          <dd className="meaning">{props.meaning}</dd>
        </div>
      </dl>
    </div>
  );
}

export default Entry;
