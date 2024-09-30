import React, { useState } from "react";
import AnotherComment from "./AnotherComment";

const NestedComment = () => {
  const [newCommentText, setNewCommentText] = useState("");
  const [allComments, setAllComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment = {
      id: Date.now(),
      msg: newCommentText,
      children: [],
    };

    setAllComments([...allComments, newComment]);
    setNewCommentText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Add a new comment"
        />
        <button type="submit">Submit</button>
      </form>

      {allComments.map(comment => (
        <AnotherComment
          key={comment.id}
          comment={comment}
          allComments={allComments}
          setAllComments={setAllComments}
        />
      ))}
    </div>
  );
};

export default NestedComment;