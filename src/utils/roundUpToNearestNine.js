/**
 * Write a function that rounds `car_prices` to the next highest 10 and then subtract 1.
 */
export default function roundUpToNearestNine(price) {
  // Math.round(4.01) => 4, .round(4.5) => 5
  // Math.ceil(4.999) => 5
  // Math.floor(4.9999) => 4

  return Math.ceil(price / 10) * 10 - 1;
}
