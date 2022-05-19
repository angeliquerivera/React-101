/**
 * Write a function that strips the initial `$` from `car_price` and convert THAT string into an number.
 */

export default function strToNum(str) {
  return Number(str.slice(1));
}
