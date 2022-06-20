import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div className="container">
      <h4>About Bookkeepers</h4>
      <ul>
        <li>
          <Link to="/about/angie">Angie</Link>
        </li>
        <li>
          <Link to="/about/christian">Christian</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
