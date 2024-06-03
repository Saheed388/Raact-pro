import React, { useState } from "react";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

function Post({ post, onUpdate }) {
  const { title, content, image, video, likes, comments, id } = post;
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  function handleLike() {
    const updatedPost = { ...post, likes: likes + 1 };
    onUpdate(updatedPost);
  }

  function expandComment() {
    setShowComments(!showComments);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleCommentSubmit(event) {
    event.preventDefault();
    if (comment.trim() !== "") {
      const updatedComments = [...comments, { text: comment, likes: 0, replies: [] }];
      const updatedPost = { ...post, comments: updatedComments };
      setComment("");
      onUpdate(updatedPost);
    }
  }

  function handleCommentLike(index) {
    const updatedComments = comments.map((cmt, i) => (
      i === index ? { ...cmt, likes: cmt.likes + 1 } : cmt
    ));
    const updatedPost = { ...post, comments: updatedComments };
    onUpdate(updatedPost);
  }

  function handleReplySubmit(index, replyText) {
    const updatedComments = comments.map((cmt, i) => (
      i === index ? { ...cmt, replies: [...cmt.replies, { text: replyText, likes: 0 }] } : cmt
    ));
    const updatedPost = { ...post, comments: updatedComments };
    onUpdate(updatedPost);
  }

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      {image && <img src={URL.createObjectURL(image)} alt="Post Image" width="200px" />}
      {video && <video controls width="200px"><source src={URL.createObjectURL(video)} type={video.type} /></video>}
      <div>
        <Zoom in={true}>
          <Fab onClick={handleLike}>
            <ThumbUpAltOutlinedIcon style={{ color: 'blue', margin: '5px' }} /> {likes}
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
        <Zoom in={true}>
          <Fab type="submit">
            <MapsUgcIcon style={{ color: 'blue', margin: '5px' }} /> {comments.length}
          </Fab>
        </Zoom>
      </form>
      <Zoom in={true}>
        <Fab onClick={expandComment}>
          <GridViewOutlinedIcon style={{ color: 'blue', margin: '5px' }} />
        </Fab>
      </Zoom>
      {showComments && (
        <div>
          {comments.map((cmt, index) => (
            <Comment
              key={index}
              comment={cmt}
              onLike={() => handleCommentLike(index)}
              onReply={(replyText) => handleReplySubmit(index, replyText)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Comment({ comment, onLike, onReply }) {
  const [replyText, setReplyText] = useState("");
  const [showReplies, setShowReplies] = useState(false);

  function handleReplyChange(event) {
    setReplyText(event.target.value);
  }

  function handleReplySubmit(event) {
    event.preventDefault();
    if (replyText.trim() !== "") {
      onReply(replyText);
      setReplyText("");
    }
  }

  function toggleReplies() {
    setShowReplies(!showReplies);
  }

  return (
    <div className="comment">
      <p>{comment.text}</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Zoom in={true}>
          <Fab onClick={onLike}>
            <ThumbUpAltOutlinedIcon style={{ color: 'blue', margin: '5px' }} /> {comment.likes}
          </Fab>
        </Zoom>
        <button className="replies" onClick={toggleReplies} style={{ marginLeft: '10px' }}>
          {showReplies ? "Hide Replies" : "Show Replies"}
        </button>
      </div>
      {showReplies && (
        <div className="replies">
          <form onSubmit={handleReplySubmit}>
            <input
              type="text"
              value={replyText}
              onChange={handleReplyChange}
              placeholder="Add a reply"
            />
            <Zoom in={true}>
              <Fab type="submit">
                <MapsUgcIcon style={{ color: 'blue', margin: '5px' }} /> {comment.replies.length}
              </Fab>
            </Zoom>
          </form>
          <div>
            {comment.replies.map((reply, index) => (
              <div key={index} className="reply">
                <p>{reply.text}</p>
                <Zoom in={true}>
                  <Fab onClick={() => handleReplyLike(index)}>
                    <ThumbUpAltOutlinedIcon style={{ color: 'blue', margin: '5px' }} /> {reply.likes}
                  </Fab>
                </Zoom>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
