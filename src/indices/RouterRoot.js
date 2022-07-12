import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactRouterRoot from "../components/ReactRouterRoot";
import Expenses from "../routes/Expenses";
import Invoices from "../routes/Invoices";
import SingleInvoice from "../routes/SingleInvoice";
import About from "../routes/About";
import Angie from "../routes/Bookkeepers/Angie";
import Christian from "../routes/Bookkeepers/Christian";

export default function RouterRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReactRouterRoot />}>
          {/* Route renders `/`  + `invoices` */}
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <h3>Select an invoice</h3>
                </main>
              }
            />

            {/* /this/is/an/:id <- convert id to a parameter */}
            <Route path=":invoiceID" element={<SingleInvoice />} />
          </Route>
          <Route path="expenses" element={<Expenses />} />

          {/* Route render `/` + `about/` + `angie`*/}
          {/* Route render `/` + `about/` + `christian`*/}
          <Route path="about" element={<About />}>
            <Route path="angie" element={<Angie />} />
            <Route path="christian" element={<Christian />} />
          </Route>

          {/* No match route:  */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <h2>Page not found</h2>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
