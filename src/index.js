import React from "react";
import { createRoot } from "react-dom/client";

import RouterRoot from "./indices/RouterRoot";
import MapRoot from "./indices/MapRoot";

const root = createRoot(document.getElementById("app"));

root.render(<MapRoot />);
