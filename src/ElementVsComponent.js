import React from "react";

export const element = React.createElement(
  "button",
  { id: "login-btn" },
  "Login"
);

export function HeadingComponent({ heading, className }) {
  return <h1 className={className}>{heading}</h1>;
}
