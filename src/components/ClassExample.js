import React from "react";

export default class Example extends React.Component {
  render() {
    // Destructuring this.props for ease-of-use
    const { name } = this.props;
    return (
      <section>
        <h3>
          Hey {name}, this is an example of a class-based React component!
        </h3>
      </section>
    );
  }
}

// Using `this.props` directly
// export default class Example extends React.Component {
//   render() {
//     return (
//       <section>
//         <h3>
//           Hey {this.props.name}, this is an example of a class-based React
//           component!
//         </h3>
//       </section>
//     );
//   }
// }
