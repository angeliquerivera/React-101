import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactRouterRoot from "./components/ReactRouterRoot";
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";

const root = createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ReactRouterRoot />}>
        <Route path="invoices" element={<Invoices />} />
        <Route path="expenses" element={<Expenses />} />
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
