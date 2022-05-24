# React

## Fundamental Topics

- JSX
- Destructuring (props, values)
- Components
  - Class components
  - Functional components
- Basic Hooks
  - `useState`, `useEffect`
- Separation of concerns (utils vs components vs styling)
- Lists and keys
- Props vs State
- Conditionally Rendering
  - Ternary (inside render/return)
  - if/else outside a render/return to decide
  - Using truthy/falsy values as testing values
- Component Lifecycle
  - how often `useEffect`s run based on absence or presence of dependencies
    - not provided: after every render
    - empty dep array: runs once ONLY after the initial render
    - dependencies provided: once after initial render and then when ANY of dep values change

```js
useEffect(() => {
  const someFunction = () => {
    // some logic
    return;
  };

  someFunction();
}, [dep1, dep2]);
```

- Composition vs Inheritance (aka breaking down big elements into helper components vs endless class extensions)

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "hello",
    };
  }
}
```

## Advanced Topics

- React Router (aka front-end routing)
- Forms (data input management)
- State Management
  - Context/State
  - Redux
  - MobX
- More Hooks
  - `useContext`
  - `useReducer`
  - `useCallback`
  - `useRef`
  - `useMemo`
- Context (Redux and global state management vs prop drilling)
- Refs
- Render props
- Higher Order Components
- Error Boundaries
- Making API Calls
  - REST API
    - `axios`
    - native JS `fetch`
  - GraphQL
    - Apollo
    - `react-query`
    - Relay Modern

## Additional Topics

- Styling (how create composed components through design)
  - CSS/SASS
  - using an autoprefixer (to handle vendor prefixes)
    ```css
    .myClass {
      -webkit-transition: all 1s linear;
      -moz-transition: all 1s linear;
      -ms-transition: all 1s linear;
      -o-transition: all 1s linear;
      transition: all 1s linear;
    }
    ```
  - Styled Components (library)
  - Emotion
  - Material UI
  - Chakra UI
  - Bootstrap
  - Bulma
  - Tailwind CSS
- Testing
  - Jest
  - Cypress
  - React Testing Library
- Mobile
  - React Native
