# More JS Notes

[MDN Docs Link for more details and examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

## Optional Chaining `?.`

- Optional chaining operator enables you to read the value of a property deep within a chain of connected objects without having to check that each reference in the chain is valid.
- The `?.` operator is like the `.` chaining operator, except that instead of causing an error, if a reference is "nullish" aka `null` or `undefined`, the expression short circuits with a return value of `undefined`. This also works with function calls.

```js
const adventurer = {
  name: "Luuuuu Trissandorial of the White Zinfandels",
  goat: {
    name: "Kanye",
  },
};

console.log(adventurer.goat.name); // "Kanye"
console.log(adventurer.dog); // undefined, no key-value pair like that on obj
console.log(adventurer.dog.name); // Error, can't read key off undefined value
console.log(adventurer?.dog?.name); // undefined, short-circuited back to undefined

console.log(adventurer?.takePetForWalk()); // undefined, no function with that name
```

## Rest Parameters

- A rest param is a syntax that allows a function to accept an indefinite number of arguments as an array providing a way to represent variatic functions within JS
- A function definition can only have ONE rest param
- The rest param must be the LAST param in the function definition

### Example

#### Only Rest Params

```js
function numSum(...nums) {
  let total = 0;

  for (const num of nums) {
    total += num;
  }

  return total;
}

numSum(1); // => 1
numSum(1, 2); // => 3
numSum(1, 2, 3); //=> 6
numSum(1, 2, 3, 4); //=> 10
```

#### Regular variables with a final rest param

```js
function largerThanAll(challengerNum, ...championNums) {
  for (const currChampion of championNums) {
    if (challengerNum < currChampion) {
      return false;
    }
  }
  return true;
}

largerThanAll(1, 2, 3, 4, 5); // => false
// challengerNum: 1
// championNums: [2,3,4,5]
largerThanAll(10, 2, 3, 4, 5); // => true
```

## Spread Syntax

## Setting up data flow for optimal use

- The easiest way to set up data for optimal use is to group like items of info and simplify names

### Before (original)

```js
[
  {
    uid: "WUALNAFG7EN123817",
    car_year: 2002,
    car_make: "Ford",
    car_model: "Focus",
    car_transmission: "Not Listed",
    car_color: "Fuscia",
    car_price: "$39552.77",
    car_mileage: 43143,
    car_title_status: "New",
    date_listed: "03/14/2022",
    dealership_name: "Ortiz, Pfeffer and Larkin",
    dealership_miles_from_you: 5.7,
    dealership_star_rating: 1.9,
    dealership_contact_name: "Alexandrina",
    dealership_contact_number: "1355281934",
    dealership_contact_email: "alexandrina@ortiz, pfeffer and larkin.biz",
  },
  // other like car listing objects
];
```

### After (grouped)

Now grouped into metadata, car info, and dealership info.

- metadata: data that provides info about our data

```js
[
  {
    meta: {
      uid: "WUALNAFG7EN123817",
      date_listed: "03/14/2022",
    },
    car: {
      year: 2002,
      make: "Ford",
      model: "Focus",
      transmission: "Not Listed",
      color: "Fuscia",
      price: "$39552.77",
      mileage: 43143,
      title_status: "New",
    },
    dealership: {
      name: "Ortiz, Pfeffer and Larkin",
      miles_from_you: 5.7,
      star_rating: 1.9,
      contact_name: "Alexandrina",
      contact_number: "1355281934",
      contact_email: "alexandrina@ortiz, pfeffer and larkin.biz",
    },
  },

  // other like car listing objects
];
```

### How your components look after the data refactor

```js
const { meta, car, dealership } = singleCarDetails;

return (
  <div className="col-6">
    <div className="card mb-4">
      <CardHeaderAndBody carInfo={car} metaInfo={meta} />
      <CardFooter dealerInfo={dealership} />
    </div>
  </div>
);
```
