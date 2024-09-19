import React, { useState } from "react";
import AnotherComment from "./AnotherComment";

const NestedComment = () => {
  const [newCommentText, setNewCommentText] = useState("");
  const [allComments, setAllComments] = useState([
    {
      id: 1,
      msg: "sachin",
      children: [
        {
          id: 2,
          msg: "virat",
          children: [
            {
              id: 3,
              msg: "rohit",
              children: [{ id: 4, msg: "gautam", children: [] }],
            },
            {
              id: 5,
              msg: "mishra",
              children: [],
            },
          ],
        },
        {
          id: 6,
          msg: "gavaskar",
          children: [],
        }
      ],
    },
  ]);

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