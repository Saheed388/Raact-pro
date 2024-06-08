import React, { useState } from "react";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import './Post.css'

function Post({ post, onUpdate }) {
  const { title, content, image, video, likes, comments } = post;
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
      i === index ? { ...cmt, replies: [...cmt.replies, { text: replyText, likes: 0, replies: [] }] } : cmt
    ));
    const updatedPost = { ...post, comments: updatedComments };
    onUpdate(updatedPost);
  }

  function handleReplyLike(commentIndex, replyIndex) {
    const updatedComments = comments.map((cmt, i) => {
      if (i === commentIndex) {
        const updatedReplies = cmt.replies.map((reply, j) => (
          j === replyIndex ? { ...reply, likes: reply.likes + 1 } : reply
        ));
        return { ...cmt, replies: updatedReplies };
      }
      return cmt;
    });
    const updatedPost = { ...post, comments: updatedComments };
    onUpdate(updatedPost);
  }

  function handleNestedReplyLike(commentIndex, replyIndex, nestedReplyIndex) {
    const updatedComments = comments.map((cmt, i) => {
      if (i === commentIndex) {
        const updatedReplies = cmt.replies.map((reply, j) => {
          if (j === replyIndex) {
            const updatedNestedReplies = reply.replies.map((nestedReply, k) => (
              k === nestedReplyIndex ? { ...nestedReply, likes: nestedReply.likes + 1 } : nestedReply
            ));
            return { ...reply, replies: updatedNestedReplies };
          }
          return reply;
        });
        return { ...cmt, replies: updatedReplies };
      }
      return cmt;
    });
    const updatedPost = { ...post, comments: updatedComments };
    onUpdate(updatedPost);
  }

  function handleNestedReplySubmit(commentIndex, replyIndex, replyText) {
    const updatedComments = comments.map((cmt, i) => {
      if (i === commentIndex) {
        const updatedReplies = cmt.replies.map((reply, j) => (
          j === replyIndex ? { ...reply, replies: [...reply.replies, { text: replyText, likes: 0, replies: [] }] } : reply
        ));
        return { ...cmt, replies: updatedReplies };
      }
      return cmt;
    });
    const updatedPost = { ...post, comments: updatedComments };
    onUpdate(updatedPost);
  }

  return (
    <div className="post" style={{ backgroundColor: ' rgb(77, 71, 71)', padding: '100px', borderRadius: '5px' }}>
      <h2>{title}</h2>
      <p>{content}</p>
      {image && <img src={URL.createObjectURL(image)} alt="Post Image" width="auto" />}
      {video && <video controls width="auto"><source src={URL.createObjectURL(video)} type={video.type} /></video>}
      
      <form onSubmit={handleCommentSubmit} style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Add a comment"
          style={{ width: 'calc(100% - 20px)', padding: '10px', boxSizing: 'border-box', backgroundColor: ' rgb(77, 71, 71)' }}
        />
        <div className="button-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', gap: '20px'}}>
          <Zoom in={true}>
            <Fab onClick={handleLike}>
              <ThumbUpAltOutlinedIcon style={{ color: 'blue', margin: '5px' }} /> {likes}
            </Fab>
          </Zoom>
          <Zoom in={true}>
            <Fab type="submit">
              <MapsUgcIcon style={{ color: 'blue', margin: '5px' }} /> {comments.length}
            </Fab>
          </Zoom>
          <Zoom in={true}>
            <Fab onClick={expandComment}>
              <GridViewOutlinedIcon style={{ color: 'blue', margin: '5px'  }} />
            </Fab>
          </Zoom>
        </div>
      </form>

      {showComments && (
        <div>
          {comments.map((cmt, index) => (
            <Comment
              key={index}
              comment={cmt}
              onLike={() => handleCommentLike(index)}
              onReply={(replyText) => handleReplySubmit(index, replyText)}
              onReplyLike={(replyIndex) => handleReplyLike(index, replyIndex)}
              onNestedReplyLike={(replyIndex, nestedReplyIndex) => handleNestedReplyLike(index, replyIndex, nestedReplyIndex)}
              onNestedReplySubmit={(replyIndex, replyText) => handleNestedReplySubmit(index, replyIndex, replyText)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Comment({ comment, onLike, onReply, onReplyLike, onNestedReplyLike, onNestedReplySubmit }) {
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
    <div className="comment" style={{ backgroundColor: '#9AC8CD', color: 'black', padding: '10px', borderRadius: '5px', margin: '10px 10px'}}>
      <p style={{ wordWrap: 'break-word' }}>{comment.text}</p>
      <div style={{ display: "flex", alignItems: "center", backgroundColor: '#D4F1F4', padding: '5px', borderRadius: '5px', marginTop: '10px' }}>
        <Zoom in={true}>
          <Fab onClick={onLike} size="small">
            <ThumbUpAltOutlinedIcon style={{ color: 'blue', margin: '5px', fontSize: '16px' }} /> {comment.likes}
          </Fab>
        </Zoom>
        <button onClick={toggleReplies} style={{ marginLeft: '10px', padding: '5px 10px', borderRadius: '5px', backgroundColor: '#D4F1F4', color: '#1E0342', border: '1px solid #1E0342', cursor: 'pointer' }}>
          {showReplies ? "Hide Replies" : "Show Replies"}
        </button>
      </div>
      {showReplies && (
        <div className="replies" style={{ marginLeft: '20px', marginTop: '10px' }}>
          <form onSubmit={handleReplySubmit}>
            <input
              type="text"
              value={replyText}
              onChange={handleReplyChange}
              placeholder="Add a reply"
              style={{ width: 'calc(100% - 20px)', padding: '5px', boxSizing: 'border-box', backgroundColor: '#E1F7F5', border: '1px solid #ccc' }}
            />
            <Zoom in={true}>
              <Fab type="submit" size="small">
                <MapsUgcIcon style={{ color: 'blue', margin: '5px', fontSize: '16px' }} /> {comment.replies.length}
              </Fab>
            </Zoom>
          </form>
          {comment.replies.map((reply, replyIndex) => (
            <Comment
              key={replyIndex}
              comment={reply}
              onLike={() => onReplyLike(replyIndex)}
              onReply={(nestedReplyText) => onNestedReplySubmit(replyIndex, nestedReplyText)}
              onReplyLike={(nestedReplyIndex) => onNestedReplyLike(replyIndex, nestedReplyIndex)}
              onNestedReplyLike={onNestedReplyLike}
              onNestedReplySubmit={onNestedReplySubmit}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Post;
