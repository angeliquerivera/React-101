import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../../data/bookkeepingData";

export default function SingleInvoice() {
  /**
   * Grab the `:invoiceID` URL param from route detailed in index.js
   */
  let { invoiceID } = useParams();

  /**
   * Declare navigation and location for `onClick` `navigate` function use
   */
  let navigate = useNavigate();
  let location = useLocation();

  /**
   * Parse `invoiceID` to be a number; since its a URL param, it's a string
   * Use parsed `invoiceID` to grab the single invoice
   */

  let invoiceNum = parseInt(invoiceID, 10);
  let { number, company, amount, due_date } = getInvoice(invoiceNum);

  /**
   * You can use JSON.stringify to view any current values in your component to help you understand what you're currently working with and also debug any possible errors.
   */
  {
    /* <pre>{JSON.stringify(singleInvoice, null, 2)}</pre> */
  }

  return (
    <section style={{ padding: "1rem" }}>
      <h5>Invoice #{number}</h5>
      <p>Owed by: {company}</p>
      <p>Amount owed: {amount}</p>
      <p>Due date: {due_date}</p>
      <button
        type="button"
        className="btn btn-danger btn-lg"
        onClick={() => {
          deleteInvoice(number);
          navigate("/invoices" + location.search);
        }}
      >
        Delete Invoice
      </button>
    </section>
  );
}
