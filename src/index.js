import React from "react";

// OLD METHOD:
// import ReactDOM from "react-dom";

// NEW METHOD:
import { createRoot } from "react-dom/client";

import FormRoot from "./FormRoot";

// OLD METHOD:
/// ReactDOM renders (Component to be rendered, React attachment location in DOM)
// ReactDOM.render(<MyForm />, document.getElementById("app"));

/**
 * NEWER, MUCH COOLER METHOD:
 * Using `createRoot`
 */
const root = createRoot(document.getElementById("app"));
root.render(<FormRoot />);
