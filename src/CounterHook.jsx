import React, { useState, useEffect } from "react";

const counterStyles = {
  fontSize: "5rem",
};

export default function CounterHook(props) {
  // const [state, setState] = useState(initialState);
  const [count, setCount] = useState(0);
  const [countState, setCountState] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      setCountState(count);
    };

    return updateCount();
  }, [count]);

  /**
   * Value change event order
   * 'Add 1' button triggers `setCount` setState function to change `count`
   * `count` updates to new value; useEffect triggers `updateCount` function
   * `updateCount` changes value of `countState`
   * React renders page again with BOTH changed values, `count` & `countState`
   */

  return (
    <section id="container">
      <nav id="navbar">
        <code>CounterHook.jsx</code>
      </nav>
      <div id="counter">
        <h1 style={counterStyles}>{count}</h1>
        <code>
          <pre>The value of count is: {countState}</pre>
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
