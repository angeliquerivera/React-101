import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../../data/bookkeepingData";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        {invoices.map(({ number, company }) => (
          <Link
            key={number}
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${number}`}
          >
            {company}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
