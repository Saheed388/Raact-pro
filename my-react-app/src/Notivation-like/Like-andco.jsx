import React, { useState } from "react";

function Post({ title, content, image, video }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleCommentSubmit(event) {
    event.preventDefault();
    setComments([...comments, comment]);
    setComment("");
  }

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      {image && <img src={URL.createObjectURL(image)} alt="Post Image" width="200px" />}
      {video && <video controls width="200px"><source src={URL.createObjectURL(video)} type={video.type} /></video>}
      <div>
        <button onClick={handleLike}>Like ({likes})</button>
      </div>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Add a comment"
        />
        <button type="submit">Comment</button>
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






















