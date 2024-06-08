import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductOwnerWall from "./Pages/ProductOwnerWall";
import RegistrationPage from "./Pages/RegistrationPage";

function App() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  function addNoteAndNavigate(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
    navigate("/registration");
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<ProductOwnerWall addNote={addNoteAndNavigate} />}
      />
      <Route
        path="/registration"
        element={<RegistrationPage notes={notes} />}
      />
    </Routes>
  );
}

export default App;
