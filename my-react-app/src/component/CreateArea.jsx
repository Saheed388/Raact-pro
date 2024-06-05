import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import AddPhotoAlternateTwoToneIcon from '@mui/icons-material/AddPhotoAlternateTwoTone';

function CreateArea(props) {
  const [expanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    image: null,
    video: null
  });

  
  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  }

  function handleFileChange(event) {
    const { name, files } = event.target;
    setNote(prevNote => ({ ...prevNote, [name]: files[0] }));
  }

  function submitNote(event) {
    event.preventDefault();

    // Ensure at least one field is filled before submitting
    if (note.title || note.content || note.image || note.video) {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
        image: null,
        video: null
      });
      setExpanded(false);
    }
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {expanded && (
          <>
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
            <div>
              <div style={{ display: 'inline-block' }} className="upload-container">
                <label htmlFor="image-upload">
                  <AddPhotoAlternateTwoToneIcon className="image-icon" style={{ fontSize: '50px', color: 'blue', marginRight: '10px' }} /> Photo
                </label>
                <input
                  id="image-upload"
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </div>
              <div style={{ display: 'inline-block' }} className="upload-container">
                <label htmlFor="video-upload">
                  <AddPhotoAlternateTwoToneIcon className="image-icon" style={{ fontSize: '50px', color: 'blue', marginRight: '10px' }} /> Video
                </label>
                <input
                  id="video-upload"
                  type="file"
                  name="video"
                  accept="video/*"
                  onChange={handleFileChange}
                  style={{ display: 'none', backgroundColor: '#9AC8CD'}}
                />
              </div>
            </div>
          </>
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Add Post..."
          rows={expanded ? 3 : 1}
        />
        <Fab size="small" color="primary" aria-label="add" onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
