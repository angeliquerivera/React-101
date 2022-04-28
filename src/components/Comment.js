import React from "react";
import UserInfo from "./UserInfo";

export default function Comment({ author, text, date }) {
  return (
    <div className="Comment">
      <UserInfo author={author} />
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{date.toLocaleTimeString()}</div>
    </div>
  );
}
