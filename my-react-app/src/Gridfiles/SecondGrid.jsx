import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CreateArea from "../component/CreateArea";
import Post from "../Notivation-like/Post";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eee',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function SecondGrid() {
  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    setPosts(prevPosts => [
      { ...newPost, id: Date.now(), likes: 0, comments: [] },
      ...prevPosts
    ]); // Adding new post at the beginning
  }

  function updatePost(updatedPost) {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      )
    );
  }

  return (
    <Item className="second-grid">
      <div>
        <CreateArea onAdd={addPost} />
        {posts.map((post) => (
          <Post 
            key={post.id} 
            title={post.title} 
            content={post.content} 
            image={post.image} 
            video={post.video} 
            post={post} // Pass the entire post object as a prop
            onUpdate={updatePost}
          />
        ))}
      </div>
    </Item>
  );
}

export default SecondGrid;
