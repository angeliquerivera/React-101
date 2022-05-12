import React, { useState, useEffect } from "react";

const counterStyles = {
  fontSize: "5rem",
};

export default function CounterHook(props) {
  // const [stateVal, setStateFunc] = useState(initialStateVal);
  const [count, setCount] = useState(0);
  const [countText, setCountText] = useState(0);

  useEffect(() => {
    // Defining a function to run based on dependencies (or lack thereof)
    const updateCount = () => {
      setCountText(count);
    };

    // Run this function every time listed dependencies change
    updateCount();
  }, [count]);

  /**
   * Value change event order
   * 'Add 1' button triggers `setCount` setState function to change `count`
   * `count` updates to new value; useEffect triggers `updateCount` function
   * `updateCount` changes value of `countText`
   * React renders page again with BOTH changed values, `count` & `countText`
   */

  return (
    <section id="container">
      <nav id="navbar">
        <code>CounterHook.jsx</code>
      </nav>
      <div id="counter">
        <h1 style={counterStyles}>{count}</h1>
        <code>
          <pre>The value of count is: {countText}</pre>
        </code>
        <button onClick={() => setCount(count + 1)}>Add 1</button>
        <button onClick={() => setCount(count - 1)}>Subtract 1</button>
        <button onClick={() => setCount(count + 5)}>Add 5</button>
        <button onClick={() => setCount(count - 5)}>Subtract 5</button>
        <button onClick={() => setCount(0)}>Reset to 0</button>
      </div>
    </section>
  );
}
