import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactRouterRoot from "./components/ReactRouterRoot";
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";
import SingleInvoice from "./routes/SingleInvoice";
import About from "./routes/About";
import Angie from "./routes/Bookkeepers/Angie";
import Christian from "./routes/Bookkeepers/Christian";

/**
 * 1. Connect the two Bookeeper components to the `/about` route and have the render the correct corresponding element.
 * 2. Create links to access both `/about` sub-routes in the UI.
 */

const root = createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ReactRouterRoot />}>
        {/* Route renders `/`  + `invoices` */}
        <Route path="invoices" element={<Invoices />}>
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
