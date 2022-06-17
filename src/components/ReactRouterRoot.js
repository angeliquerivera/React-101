import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function ReactRouterRoot() {
  return (
    <div className="container">
      <h4 className="display-4">Bookkeeper App!</h4>
      <nav
        style={{
          borderBottom: "1px solid",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
