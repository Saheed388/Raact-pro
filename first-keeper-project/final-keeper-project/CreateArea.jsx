import React, { useState } from "react";


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    image: null  // To store the base64 encoded image
  });

  function handleChange(event) {
    const { name, value, files } = event.target;

    if (name === "image") {
      const reader = new FileReader();
      reader.onload = () => {
        setNote(prevNote => ({
          ...prevNote,
          [name]: reader.result  // Store the base64 encoded image
        }));
      };
      reader.readAsDataURL(files[0]); // Convert the file to base64
    } else {
      setNote(prevNote => ({
        ...prevNote,
        [name]: value
      }));
    }
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      image: null  // Reset image state after submitting
    });
    // event.target.reset();
    event.preventDefault();
  }


  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <input
          type="file"
          name="image"
          className="custom-file-input"
          onChange={handleChange}
        />
        {/* Display the base64 encoded image string */}
        {note.image && <p>{note.image}</p>}
        {/* Display the uploaded image */}
        {note.image && <img src={note.image} alt="Uploaded" />}
        <button onClick={submitNote}>Post</button>
      </form>
    </div>
  );
}

export default CreateArea;
