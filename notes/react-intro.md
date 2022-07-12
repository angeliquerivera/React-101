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
// Arrow function from ES2015+
[1, 2, 3]
  .map((n) => n + 1)

  [
    // Babel output:
    // ES5 equivalent
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

- Conditionals CANNOT be done using `if-else` embedded
- 3 ways to do conditionals in JSX:
  - 1st way : ternary within braces
  - 2nd way : use `if` statement outside of a JS element
  - 3rd way : logical AND, `&&`, operator; also known as a short-circuit

#### Parents, Children, Fragments

- ALL JSX elements must have a parent element
- Parent elements contain all the child subelements
- Parent elements can be existing HTML tags OR you can add a fragment
- Fragments let you wrap child subelements without add a node to the DOM

#### What is the DOM?

- `DOM` stands for "Document Object Model"
- Programming interface for web documents
- Data representation of the objects that make up the contents of the web document
  - DOM represents a web document as nodes and objects

#### Virtual DOM

- React uses Virtual DOM
- Virtual DOM can be thought as a blueprint for the DOM
- When any changes are made to React elements, the Virtual DOM is updated
- Virtual DOM finds differences between itself and the DOM and re-renders only the elements in the DOM that have changed
- This makes the Virtual DOM faster and more efficient than updating the entire DOM

## Componentizing

- The action of selecting rendered React code and extracting it out into its own separate component that can then be referenced anywhere within the project

### Why componentize?

- React works off the idea that you can build reusable components that you can reference as many times as you need to within your project to eliminate the need for repeated code
- Also allows you to write simplier looking components by allowing you to extract component logic out into its own separate concern
- This leads to easier readability, testability, and usage throughout your project

### What's the basic pattern for componentizing?

1. Identify the logic that you can extract into its own component
2. Think about the category of component it would be as it simplifies organization
3. Create a new component file with a name that's representative of the functionality the component will provide
4. Copy the logic from the source component into this new destination
5. Generalize all the static values that are being operated on in the logic of the component into variables
   1. e.g. Fetching from an API: you can change the string URL into a `fetchURL` variable and add a corresponding declaration for that variable where appropriate
   2. Creating a specialized <Link> component: changing the string `to` prop to a generalized `destination` variable
6. Ensure that the new component has access to all necessary libraries by adding all required imports FROM YOUR NEW FILE LOCATION
   1. This means that your old import `from` locations may need to be updated!
7. Export your new component
8. Use your new component wherever you need to by importing it and passing in whatever `props` it needs
9. Remove all duplicated logic and imports from the source component

## Project Roots and `createRoot` from `react-dom`

- `createRoot` creates the attachment point for your React project to hook into your HTML

### Breaking down an example:

```js
// index.js
const root = createRoot(document.getElementById("app"));
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script defer src="/bundle.js"></script>
    <title>React 101 Basics</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

- `createRoot` finds where the id `app` is located inside the HTML file and connects the React project to the HTML document
