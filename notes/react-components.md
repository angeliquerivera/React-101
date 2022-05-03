# React Components

## What is a React component?

- A way to organize groups of HTML elements (similar to a partial in EJS/other template languages)
- Accept inputs that we call `props` and then return React elements that describe what we should see on screen

## Rules of React components

### Props and using them

- You can define `props` in a React component and then use them by calling on the data you want from the `props` object within the component
- You can pass down `props` to a React component using an attribute-like syntax
  - You pass in the prop name and assign a JSX value
- You can destructured `props` inside a component definition to more easily access the received values
- The first argument any React component ALWAYS receives is `props`

## Attaching React to the DOM

- We import App and rendering it to the DOM by attaching it to a certain div with id `app` in `index.html` using ReactDOM

## Functional and Class Components

- The simpliest way to define a component is to write a JS function

### Functional Components

React components written using function declarations.

```js
// App.js

import React from "react";
import ReactDOM from "react-dom";

export default function App() {
  return <div id="container">This is the container.</div>;
}
```

### Class Components

React component as a class, not function.

```js
import React from "react";

export default class Example extends React.Component {
  render() {
    return (
      <section>
        <h3>
          Hey {this.props.name}, this is an example of a class-based React
          component!
        </h3>
      </section>
    );
  }
}
```

## Can you use a component more than once in an app?

Yes, because of the way React adds components to the DOM

## React App Structure

### Component Organization

We can place our components inside a folder called `components` in the `src` folder.`

### Importing components into the App

## Dynamic Content (State vs Props)

### State in a React Component

- Changes in the view aka render of a React component are ALWAYS described by state
- `this.state` is immutable (read-only)
- Immutability is the idea that once an obj or variable has been created, its value should NEVER change or be updated by anything
  - For objs and classes, this also includes any key-value pairs (nothing should change)

## `this` and `.bind()`-ing context

- `.bind()` method creates a new function that when called has its `this` keyword set to the provided value.
