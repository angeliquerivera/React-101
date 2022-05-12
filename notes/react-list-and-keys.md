# React Lists and Keys

## How we transform lists in JS

### `.map()` function

- `.map()` is an array function
- `.map()` accepts a callback function, inline or predefined
- The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array
- `.map()` , like other array methods, has access to the individual array element, the corresponding index, and the array as a whole in its callback

```js
// .map() function signature
someArr.map((element, idx, arr) => {});

const arr = [1, 2, 3, 4, 5];
// TASK: Write a .map function to double each number in the array.

arr.map((element) => {
  element * 2;
});
// [2,4,6,8,10]
```

### Things to remember when `.map()`-ping

- If you plan to have your map directly return HTML elements, you must return them in parentheses, NOT braces
- You can use braces for the return if there is additional logic to be done before you dictate what HTML element you're returning

#### Keys and why they matter

- A key is a bit of data that helps React identify which items have changed, have been added, or have been removed
- Keys should be given to the elements inside the array to give the elements a stable identity
- You should use stable data as your key value
- You should NOT use the element index as your key EXCEPT as a last resort
