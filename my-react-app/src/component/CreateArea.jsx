import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const[expanded, setExpanded] = useState(false)

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  


  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand (){
    setExpanded(true)
  }



  return (
    <div>

    


      <form className="create-note">
        {expanded ?  <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder=" Add Post..."
          rows={expanded ? 3 : 1}
        />
        <Zoom in={expanded}>
        <Fab onClick={submitNote}>
          <AddIcon/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
