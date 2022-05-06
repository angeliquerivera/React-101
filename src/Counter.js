import React, { Component } from "react";

const counterStyles = {
  fontSize: "5rem",
};

export default class Counter extends Component {
  constructor(props) {
    super(props);

    // If `startVal` exists, use `startVal`; else start at 0
    this.state = {
      currCount: this.props.startVal || 0,
    };

    this.adjustCount = this.adjustCount.bind(this);
  }

  // Ternary Syntax -  CONDITIONAL ? TRUE RESULT : FALSE RESULT
  adjustCount(num) {
    this.setState({
      currCount: num !== 0 ? this.state.currCount + num : 0,
    });

    // The if-else conditional way
    // if (num === 0) {
    //   this.setState({
    //     currCount: 0,
    //   });
    // } else {
    //   this.setState({
    //     currCount: this.state.currCount + num,
    //   });
    // }
  }

  render() {
    return (
      <section id="container">
        <nav id="navbar">Counter.js</nav>
        <div id="counter">
          <h1 style={counterStyles}>{this.state.currCount}</h1>
          <button onClick={() => this.adjustCount(1)}>Add 1</button>
          <button onClick={() => this.adjustCount(-1)}>Subtract 1</button>
          <button onClick={() => this.adjustCount(5)}>Add 5</button>
          <button onClick={() => this.adjustCount(-5)}>Subtract 5</button>
          <button onClick={() => this.adjustCount(0)}>Reset to 0</button>
        </div>
      </section>
    );
  }
}
