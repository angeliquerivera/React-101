import React from "react";
import ReactDOM from "react-dom";

const age = 19;
const drinkingAge = 21;

const singleLineTitle = <h1>Greetings!</h1>;

const basicEmbeddedJS = (
  <section>
    <h2>Doing some Math</h2>
    <p>2 * 4 is {2 * 4}</p>
    <p>2 * 4 is {8}</p>
    <hr />
  </section>
);

const ternaryExamples = (
  <section>
    <h2>JSX Conditionals</h2>
    <h3>Ternary in Action</h3>
    <pre>age: {age}</pre>
    <pre>drinkingAge: {drinkingAge}</pre>
    <h4>Conditional Inner Content</h4>
    <p>{age >= drinkingAge ? "I'm legal to drink!" : "Not yet legal :("}</p>
    <h4>Conditional Node Selection</h4>
    {age >= drinkingAge ? (
      <p>I'm absolutely legal to drink.</p>
    ) : (
      <p>Gimme a few years.</p>
    )}
    <h4>Selective Node Rendering</h4>
    {age >= drinkingAge ? <p>Let's get dangerous!</p> : null}
  </section>
);

const content = (
  <section>
    <h1>Hello From React!</h1>
    <p>
      <em>This is a byline under the headline.</em>
    </p>
    <hr />
  </section>
);

let money;
let payDay = true;

if (payDay) {
  money = 1000;
} else {
  money = 0;
}

const usingIfStatements = (
  <section>
    <h2>Using If Statements</h2>
    <h3>Conditional values</h3>
    <p>I have {money} dollars right now.</p>
    <h3>Conditional Nodes</h3>
    {payDay ? <p>I'm rollin' right now!</p> : <p>I'm broke ass bitch.</p>}
    <h3>Selective Node Render</h3>
    {payDay ? <p>Better then nothing</p> : null}
  </section>
);

const values = [1, 2, 3];

const usingLogicAnd = (
  <section>
    {values.length > 0 && (
      <p>Is this values-based short-circuit gonna render?</p>
    )}
  </section>
);

/**
 * ALL JS Falsy values
 * false
 * 0
 * -0
 * 0n
 * "", '', `` (any empty string)
 * null
 * undefined
 * document.all
 */

const largeGreen = {
  color: "green",
  fontSize: "4rem",
};

const smallBlue = {
  color: "blue",
  fontSize: ".5rem",
};

const currValue = Math.random();

/**
 * Write an h1 tag that attaches the 'largeGreen' styling if currValue is > .5; and "smallBlue" if it's not.
 */

const situationalStyling = (
  <h1 style={currValue > 0.5 ? largeGreen : smallBlue}>{currValue}</h1>
);

ReactDOM.render(situationalStyling, document.getElementById("app"));
