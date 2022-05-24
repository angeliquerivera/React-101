# [Forms in React](https://reactjs.org/docs/forms.html)

## How `<form>` elements are different from other DOM elements

- HTML `form` elements are different from other DOM elements in React because `form` elements naturally keep some internal `state`.

## Control and default behavior

```html
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

### What is a controlled component?

- A controlled component is a component that has a function or set of functions that handle form data via the component state
- Forms are used to store documents

## Converting a JSX Form to Controlled Form with React Hooks

- When you convert a regular form to a form where React is controlling the `state`, we should make sure to do a couple of things:
  - Creating a `state` obj to store the form data by using the `useState` hook
  - Add value properties to each form input and assign their values to each corresponding `state` obj property
  - Add an onChange event listener function to handle updating the `state`
