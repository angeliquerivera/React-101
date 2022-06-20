import React from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../../data/bookkeepingData";

export default function SingleInvoice() {
  const { invoiceID } = useParams();
  const { amount, company, due_date } = getInvoice(parseInt(invoiceID, 10));
  return (
    <section style={{ padding: "1rem" }}>
      <h5>Invoice #{invoiceID}</h5>
      <h6>Total Due: {amount}</h6>
      <p>Owed by: {company}</p>
      <p>Due Date: {due_date}</p>
    </section>
  );
}
