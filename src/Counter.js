import React, { Component } from "react";

const counterStyles = {
  fontSize: "5rem",
};

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      currCount: 0,
    };
    this.addToCount = this.addToCount.bind(this);
    this.subtractOne = this.subtractOne.bind(this);
    this.addFive = this.addFive.bind(this);
    this.subtractFive = this.subtractFive.bind(this);
    this.resetToZero = this.resetToZero.bind(this);
  }

  addToCount() {
    this.setState({
      currCount: this.state.currCount + 1,
    });
  }

  subtractOne() {
    this.setState({
      currCount: this.state.currCount - 1,
    });
  }

  addFive() {
    this.setState({
      currCount: this.state.currCount + 5,
    });
  }

  subtractFive() {
    this.setState({
      currCount: this.state.currCount - 5,
    });
  }

  resetToZero() {
    this.setState({
      currCount: this.state.currCount - this.state.currCount,
    });
  }

  /**
   * Add buttons to this Counter that:
   * Subtracts 1
   * Add 5
   * Subract 5
   * Reset to 0
   */

  render() {
    return (
      <section id="container">
        <nav id="navbar">Counter.js</nav>
        <div id="counter">
          <h1 style={counterStyles}>{this.state.currCount}</h1>
          <button onClick={this.addToCount}>Add 1</button>
          <button onClick={this.subtractOne}>Subtract 1</button>
          <button onClick={this.addFive}>Add 5</button>
          <button onClick={this.subtractFive}>Subtract 5</button>
          <button onClick={this.resetToZero}>Reset to 0</button>
        </div>
      </section>
    );
  }
}
