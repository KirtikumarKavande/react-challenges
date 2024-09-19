import React, { useState } from "react";

const AnotherComment = ({ comment, allComments, setAllComments, level = 0 }) => {
  const [isReplyVisible, setIsReplyVisible] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    const newComment = {
      id: Date.now(),
      msg: replyText,
      children: []
    };

    const addReply = (comments) => {
      return comments.map(c => {
        if (c.id === comment.id) {
          return { ...c, children: [...c.children, newComment] };
        }
        if (c.children.length > 0) {
          return { ...c, children: addReply(c.children) };
        }
        return c;
      });
    };

    setAllComments(addReply(allComments));
    setReplyText("");
    setIsReplyVisible(false);
  };

  return (
    <div style={{ marginLeft: `${level * 20}px` }}>
      <div>{comment.msg}</div>
      <button onClick={() => setIsReplyVisible(!isReplyVisible)}>
        {isReplyVisible ? "Cancel" : "Reply"}
      </button>
      
      {isReplyVisible && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
          />
          <button type="submit">Submit</button>
        </form>
      )}
      
      {comment.children.map(childComment => (
        <AnotherComment
          key={childComment.id}
          comment={childComment}
          allComments={allComments}
          setAllComments={setAllComments}
          level={level + 1}
        />
      ))}
    </div>
  );
};

export default AnotherComment;