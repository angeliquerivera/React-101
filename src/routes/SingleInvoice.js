import React from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../../data/bookkeepingData";

export default function SingleInvoice() {
  /**
   * Grab the `:invoiceID` URL param from route detailed in index.js
   */
  const { invoiceID } = useParams();

  /**
   * Parse `invoiceID` to be a number; since its a URL param, it's a string
   * Use parsed `invoiceID` to grab the single invoice
   */

  const invoiceNum = parseInt(invoiceID, 10);
  const { number, company, amount, due_date } = getInvoice(invoiceNum);

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
    </section>
  );
}
