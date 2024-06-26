import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(input) {
  return (
    <Entry
      key={input.id}
      name={input.name}
      emoji={input.emoji}
      meaning={input.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
