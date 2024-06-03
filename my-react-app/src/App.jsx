import React, { useState } from "react";
import Header from "./Headerfile/Header";
import Note from "./component/Note";
import CreateArea from "./component/CreateArea";
import AutoGrid from "./Gridfiles/AutoGrid";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
      <Header />
      <AutoGrid />
    
    </div>
  );
}

export default App;
