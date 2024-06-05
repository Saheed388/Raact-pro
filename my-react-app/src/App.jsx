import React, { useState } from "react";
import Header from "./Headerfile/Header";
import Note from "./component/Note";
import CreateArea from "./component/CreateArea";
import AutoGrid from "./Gridfiles/AutoGrid";


import ProductOwnerWall from "./Pages/ProductOwnerWall";
// import RagistrationPage from "../Pages/RagistrationPage";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((noteItem, index) => index !== id));
  }

  return (
    <div>
      <ProductOwnerWall />
      {/* <RagistrationPage /> */}
    
    </div>
  );
}








export default App;
