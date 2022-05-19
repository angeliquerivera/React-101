import React from "react";

export default function CardHeader({ titleStatus, info, color }) {
  return (
    <header className="card-header">
      <small>{titleStatus}</small>
      <h5 className="card-title">
        {info} ({color})
      </h5>
    </header>
  );
}
