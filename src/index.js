import React from "react";
import ReactDOM from "react-dom";

import CarsList from "./CarsList";
// import Counter from "./Counter";
import CounterHook from "./CounterHook.jsx";
// import { element, HeadingComponent } from "./ElementVsComponent";

// const Container = () => (
//   <div>
//     <Counter />
//     <Counter />
//   </div>
// );

// ReactDOM renders (Component to be rendered, React attachment location in DOM)
ReactDOM.render(<CarsList />, document.getElementById("app"));
