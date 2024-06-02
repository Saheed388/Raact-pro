import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CreateArea from "../component/CreateArea";
import Note from "../component/Note";
import Notifictions from "../Notivation-like/Like-andco"
import Post from "../Notivation-like/Like-andco"
// import CreateArea from '../component/CreateArea';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eee',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function SecondGrid() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((noteItem, index) => index !== id));
  };

  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    setPosts(prevPosts => {
      return [...prevPosts, newPost];
    });
  }


  return (
    <Item className='second-grid'>
      <div>
      <CreateArea onAdd={addPost} />
      {posts.map((post, index) => (
        <Post 
          key={index} 
          title={post.title} 
          content={post.content} 
          image={post.image} 
          video={post.video} 
        />
      ))}
    </div>


    </Item>
  );
}

export default SecondGrid;
