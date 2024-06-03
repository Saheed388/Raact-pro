import React, { useState, useEffect } from "react";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Post({ title, content, image, video }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [commentCount, setCommentCount] = useState(0);
  const [expanded, setExpanded] = useState(true); // Assuming expanded is always true for demonstration

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleCommentSubmit(event) {
    event.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
      setCommentCount(commentCount + 1);
    }
  }

  useEffect(() => {
    const imageURL = image ? URL.createObjectURL(image) : null;
    const videoURL = video ? URL.createObjectURL(video) : null;

    // Cleanup URLs to avoid memory leaks
    return () => {
      if (imageURL) URL.revokeObjectURL(imageURL);
      if (videoURL) URL.revokeObjectURL(videoURL);
    };
  }, [image, video]);

  const imageURL = image ? URL.createObjectURL(image) : null;
  const videoURL = video ? URL.createObjectURL(video) : null;

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      {imageURL && <img src={imageURL} alt="Post Image" width="200px" />}
      {videoURL && <video controls width="200px"><source src={videoURL} type={video.type} /></video>}
      <div>
        <Zoom in={expanded}>
          <Fab onClick={handleLike}>
            <ThumbUpAltOutlinedIcon /> {likes}
          </Fab>
        </Zoom>
      </div>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Add a comment"
        />
        <button type="submit"><MapsUgcIcon/> Comment <span>{commentCount}</span> </button>

      </form>
      <div>
        {comments.map((cmt, index) => (
          <p key={index}>{cmt}</p>
        ))}
      </div>
    </div>
  );
}

export default Post;
