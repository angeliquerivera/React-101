import React from "react";
import ReactDOM from "react-dom";

const content = (
  <section>
    <h1>Hello From React!</h1>
    <p>
      <em>This is a byline under the headline.</em>
    </p>
  </section>
);

ReactDOM.render(content, document.getElementById("app"));
