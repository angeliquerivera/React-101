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
  - Add value properties to each form `<input>` and assign their values to each corresponding `state` obj property
  - Add an `onChange` event listener function to handle updating the `state`

## Event Listeners, what are they?

- An event listener is a procedure in JS that waits for an event to occur.
- A simple example is the user clicks a mouse or presses a key on the keyboard

### The methods

- `.addEventListener()`: sets up a function on the event target interface that will be called whenever the specific event is delivered to the target.
- `.removeEventListener()`: removing the functionality from the event target interface that was previously registered by an `.addEventListener()`. The event listener to be removed is identified by using a combination of the event type and the event function itself

### Event Listener and `useEffect`

### More examples

- The user resizes or closes a browser window
- A webpage finishes loading
- A form is submitted
- A video is played, paused, or finished
- When an error occurs

### The Vanilla JS

- There are a couple of steps to using event listeners in the DOM

  1. Focus the DOM element(s) that will have the event and functionality attached
  2. Add the event listener to each element with its corresponding event type and functionality
  3. Clear the events by removing the event listener using the matching event types and functionality

  - 1st method: `.addEventListener()`
  - 2nd method: `.removeEventListener()`

```js
// grabbing the DOM element that will have the event attached
const btn = document.querySelector(".test");

// adding the event listener
btn.addEventListener("click", changeColor);

// removing the event listener
btn.removeEventListener("click", changeColor);

// Within React, via `useEffect`
/**
 * Define function `changeColor` to generate new RGB color, and assign that color to the background of the document
 * Grab the button with class `test` and add an event listener to that button
 * - that button will run the `changeColor` function as a callback based on the event type, `"click"`
 * In order to get repeated uses, we need to clear the active, by `removeEventListener` and dictating what event and what callback to remove.
 */
useEffect(() => {
  const changeColor = () => {
    function randomColor(number) {
      return Math.floor(Math.random() * number + 1);
    }

    const newColor = `rgb(${randomColor(255)}, ${randomColor(
      255
    )}, ${randomColor(255)})`;

    document.body.style.backgroundColor = newColor;
  };

  const btn = document.querySelector(".test");
  btn.addEventListener("click", changeColor);

  return () => {
    btn.removeEventListener("click", changeColor);
  };
}, []);
```

### React and event handling

- You pass the event type as a camelCase attribute directly into the element(s) you want
- Then assign that event type the functionality you want to execute

#### Examples

```js
// in component scope (or imported)
const changeColor = () => {
  function randomColor(number) {
    return Math.floor(Math.random() * number + 1);
  }

  const newColor = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(
    255
  )})`;

  document.body.style.backgroundColor = newColor;
};

// in the HTML render return
<button className="test" onClick={changeColor}>
  Change background color
</button>;
```

### React Event Handler Types

- `onClick`: whenever a DOM element is clicked
- `onKeyDown`: when you press a key on your keyboard
- `onChange`: value change on targeted input
- `onSubmit`: when some form is submitting data

## Spread Syntax

- Copies its own inumerable properties from one object to another; from one array to another

```js
// Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const val = 69;

const combinedArr = [...arr1, val, ...arr2];

// Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { codeIsFun: true };

const clonedObj = { ...obj1, ...obj3, ...obj2 };
```

## Computed Property Names

- Allow you to put an expression in brackets that will be evaluated and used as the property name

### Vanilla JS

```js
const key = "fruit";

supermarket[key] = "banana";

// { "fruit" : "banana" }
```

### React (`setStateFunction`)

```js
// state definition:
const [contactInfo, setContactInfo] = useState({
  name: "",
  email: "",
  phone: "",
});

/**
 * Update the input field state as each input changes
 * @function handleChange
 * @param {SyntheticEvent} event
 */
const handleChange = (event) => {
  setContactInfo({
    ...contactInfo,
    [event.target.name]: event.target.value,
  });
};

// ...contactInfo is all existing state
// [event.target.name] is the computed property name of the CHANGING value
// event.target.value is the new value to be assigned
```

## `MyForm.js` Review Questions

### How can we manage the information this form component is handling?

- We can import `useState` from React to manage the info within this component

### How are we setting up `useState` to handle the form's data?

- We set up a tuple that contains the reference to the `state` value and its corresponding `setState` function; we also assign the initial value of `useState` to an object that contains 3 key-value pairs; one for each corresponding form input

### What is the importance of each `<input>` having a `name` attribute?

- When you interact with the form and go to type in your input, those inputs become the source of an event. Because the inputs each have a `name` attribute, it allows us to tell React how to refer to each targeted event by its name to change its value as needed

### How do interactive tags like `<input>` work with events in React?

- An `event` is when some sort of action is happening on the website, typically as the result of some kinda interaction. On the event itself we can access a whole bunch of data, such as the event's target. Having a name value on each input allows us to refer to that input when it's being targeted

```js
const handleChange = (event) => {
  console.log(event.target.name);
  console.log(event.target.value);
  // setContactInfo({
  //   ...contactInfo,
  //   [event.target.name]: event.target.value,
  // });
};
```

### When there's no `onChange` handler on the `<input>` fields, we get this error; how do we fix it? Why?

```
Warning: You provided a `value` prop to a form field without an `onChange` handler.
This will render a read-only field.
If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
```

- Place an `onChange` event handler in the `<input>` field and gave it the value of a function that will handle the changes of that input's value.

### With the `onChange` handlers in place, we try to add our values to the inputs, only to see that we're not updating the values in the inputs. How do we assign the value of each input as it changes?

- Set up a function to handle these changes by reading off of the event
- Spread out old state values, compute the changing values by reading off of the event's target

### Why is it a good idea for these `<input name="something">` attributes to match the key-values pair assigned as the initial state?

- If your event target name matches some value within your state, you can use the computed property value to handle ALL cases of change within a form instead of having to manually designate changes for all of them individually via their own `onChange` function that only changes the one field

### When a form is submitted, the form has a default action - what is it?

- The default action when a form is submitted is to refresh the page

### How do we prevent this form submission page refresh?

- Attach an `onSubmit` event handler to the `<form>` tag
- pass it some `handleSubmit` function that will call a certain function on the event, `event.preventDefault()`, to prevent the form from refreshing the page.
