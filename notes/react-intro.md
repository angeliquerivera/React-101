# React

## What is React?

- React is a js frontend library that's used to build user interfaces.
- User interface is a webpage
- It's an open-source project created by Facebook
- React is NOT a framework (framework example would be Angular)
- React is the view layer of the MVC (Model-View-Controller)

### What does 'frontend' and 'backend' refer to?

- Frontend : the style and visual look of the page
- Backend: server, logic, and infrastructure of the page

### React Prereqs

- React allows you to use HTML and CSS
- Basic understanding of the 'DOM'

### What does React do?

- You can create components which are custom, reusable HTML elements.
  - In the last project, we called these, "partials"
- React also streamlines how data is stored and handled, using `state` and `props`, respectively

### Babel

- Babel is a JS compiler that is used to convert code that is ES6 and above into older ES5 code

#### Babel in action

```js
// Babel input:
[1, 2, 3]
  .map((n) => n + 1)

  [
    // Babel output:
    (1, 2, 3)
  ].map(function (n) {
    return n + 1;
  });
```

## Dependencies

`npm i @babel/core @babel/preset-react babel-loader`
`npm i react react-dom`
`npm i webpack webpack-cli webpack-dev-server`

### React Packages (`react` & `react-dom`)

#### `react`

- The library that gives us the ability to write components.

#### `react-dom`

- It is a helper that gives us the ability to take a `react` component and transform it into real `DOM` elements.

### JSX

- JSX is a mixture of JS and HTML.
- If you have a JSX expression that spans multiple lines, wrap it in parentheses.
- JSX also has access to all HTML attributes
- In JSX, use `className` instead of `class` for class attribute
- Use braces to embed JS into JSX
- When JS code is embedded in braces, it should be invoked

#### Conditionals

- Conditonals CANNOT be done using `if-else` embedded
- 3 ways to do conditionals in JSX:
  - 1st way : ternary within braces
  - 2nd way : use `if` statement outside of a JS element
  - 3rd way : logical AND, `&&`, operator; also known as a short-circuit

#### Parents, Children, Fragments

- ALL JSX elements must have a parent element
- Parent elements contain all the child subelements
- Parent elements can be existing HTML tags OR you can add a fragment
- Fragments let you wrap child subelements without add a node to the DOM

#### Virtual DOM

- React uses Virtual DOM
- Virtual DOM can be thought as a blueprint for the DOM
- When any changes are made to React elements, the Virtual DOM is updated
- Virtual DOM finds differences between itself and the DOM and re-renders only the elements in the DOM that have changed
- This makes the Virtual DOM faster and more efficient than updating the entire DOM
