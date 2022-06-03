# React Hooks

## What are React Hooks?

- Hooks let you use states and other React features without needing to write a class
- Hooks are backwards compatible
- Hooks are functional components

## What are some of most important rules to follow when using hooks?

[5 Mistakes to Avoid When Using React Hooks](https://dmitripavlutin.com/react-hooks-mistakes-to-avoid/)

- You want to make sure that hooks are called as early within your functional component as possible
- Do not use stale `state`
- Do not create stale closures
- Do not use `state` for infrastructure data
- Do not forget to clean up side effects

## What is a hook?

- Hooks are functions that let you "hook into" React, state, and life cycle features from function components
- Hooks DO NOT WORK inside of classes, rather they let you use React without classes
- React provides a number of built-in hooks

## What are some of React's built-in hooks?

Some of most used hooks are:

- `useState` hook:
- `useEffect` hook
- `useContext` hook

### `useState` hook

#### Signature

```js
const [state, setState] = useState(initialState);
```

#### Details

- The `useState` hook returns a function and a value to update it
- During the initial render, the `state` is the same as the value passed as the first argument to use `state`

### `useEffect` hook

#### Signature

```js
useEffect(() => {
  updateFunction();

  return () => optionalCleanupFunction();
}, [dependencies]);
```

#### Details

- `useEffect` accepts a function that contains imperative code
- Mutations, aka changes to other states and values, subscriptions, timers, logging, and other side effects are NOT allowed inside the main body of a functional component, as these are reserved for React's `render` phase
- By default, effects run after every completed render but you can choose to fire these effects by designating certain dependencies, aka values, and their change as the trigger

### Dependencies array and `useEffect` triggering

- The dependencies' argument of the `useEffect` lets you control when the side effect runs

#### No dependency array declared

- This `useEffect` runs after every render.

```js
import { useEffect } from "react";
function MyComponent() {
  useEffect(() => {
    // Runs after EVERY rendering
  });
}
```

### EMPTY dependency array

- This `useEffect` runs ONCE after the initial render and never again

```js
import { useEffect } from "react";
function MyComponent() {
  useEffect(() => {
    // Runs ONCE after initial rendering
  }, []);
}
```

### One value in dependency array

- This `useEffect` runs any time the value of the dependency changes

```js
import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    // Runs any time `value1` changes
  }, [value1]);
}
```

### Multiple values in dependency array

- This `useEffect` runs when ANY of the specified values in the dependency change

```js
import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    // Runs any time `val1`, `val2`, OR `val3` changes
  }, [val1, val2, val3]);
}
```

### `useContext` hook

#### Signature

```js
const value = useContext(myContext);
```

- `useContext` accepts a context object (value returned by `React.createContext`)
- A component that calls `useContext` will always re-render when the context value changes
