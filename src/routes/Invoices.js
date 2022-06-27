import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../../data/bookkeepingData";

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        <input
          placeholder="Search for an invoice here..."
          className="form-control"
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ company: filter });
            } else {
              setSearchParams({});
            }
          }}
        />

        {/* {invoices.filter(CODE).map(CODE)} */}

        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("company");

            /**
             * Base case: no filter; show all invoices
             */
            if (!filter) return true;

            /**
             * Filter case: input filter against company name
             * Bring parity to company name and filter
             * Lowercase all company names to match lowercased filter
             * Returns boolean for filter function using `.startsWith`
             */
            let lowercaseCompany = invoice.company.toLowerCase();
            let lowercaseFilter = filter.toLowerCase();

            return lowercaseCompany.startsWith(lowercaseFilter);
          })
          .map(({ number, company }) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "deeppink" : "",
                  fontStyle: isActive ? "italic" : "",
                };
              }}
              to={`/invoices/${number}`}
              key={number}
            >
              {company}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
