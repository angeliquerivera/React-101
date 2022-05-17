import React from "react";

export default function VehicleTypes({ types }) {
  return (
    <ol>
      {types.map((type) => (
        <li key={type}>{type}</li>
      ))}
    </ol>
  );
}
