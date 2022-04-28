import React from "react";
import AvatarImage from "./AvatarImage";

export default function UserInfo({ author }) {
  return (
    <div className="UserInfo">
      <AvatarImage author={author} />
      <div className="UserInfo-name">{author.name}</div>
    </div>
  );
}
