import React from "react";

export default function AvatarImage({ author }) {
  return <img className="Avatar" src={author.avatarUrl} alt={author.name} />;
}
