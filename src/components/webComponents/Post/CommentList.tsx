import React from "react";
import CommentCard from "./CommentCard";

const CommentList = () => {
  return (
    <ul className="py-1">
      <li>
        <CommentCard />
      </li>
      <li>
        <CommentCard />
      </li>
      <li>
        <CommentCard />
      </li>
    </ul>
  );
};

export default CommentList;
