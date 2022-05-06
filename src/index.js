import React from "react";
import ReactDOM from "react-dom";

import Counter from "./Counter";
import { element, HeadingComponent } from "./ElementVsComponent";

// const Container = () => (
//   <div>
//     <HeadingComponent
//       heading={"It's the Oozora Police!"}
//       className={"holotext"}
//     />
//     {element}
//   </div>
// );

// ReactDOM renders (COMPONENT, location)
ReactDOM.render(<Counter startVal={102} />, document.getElementById("app"));
