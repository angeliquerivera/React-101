import React from "react";

export default function AvatarImage({ author }) {
  const { avatarUrl, name } = author;

  return <img className="Avatar" src={avatarUrl} alt={name} />;
}
