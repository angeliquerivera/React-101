# [React Interview Questions](https://github.com/sudheerj/reactjs-interview-questions)

1. What is React?

- An open-source JS library that is used to build user interfaces (front-end).

2. What are some major features of React?

- Uses JSX
- Compares Virtual DOM to real DOM to determine what elements to update when changes occur vs updating entire real DOM every update
- Uses components which are reusable and composable

3. What is JSX?

- JSX combines the expressiveness of JS while giving us the templating of HTML.

4. What is the difference between Element and Component?

- Elements are plain objects that describe what you want to appear on screen whereas components can be declared in several different ways such as functions or classes

5. How to create components in React?

- Functional Component: JS function that accepts props as first argument and returns React element
- Class Component: JS class that extends React's `Component` class

6. When to use Class component vs a Functional Component?

- Always try to use a functional component unless using older version of React

8. What is state in React?

- `state` of a component is an obj that holds some info that may change over the lifetime of the component
- `state` is private and fully controlled by the component itself

9. What are props in React?

- `props` is shorthand for 'properties' of the component
- `props` are inputs to components

10. What is the difference between `state` and `props`?

- Both `props` and `state` are regular JS objects
- Both can influence the output of the render
- `props` get passed to components the same way params get passed into a function
- `state` is managed within a component similar to a variable declared within a function
