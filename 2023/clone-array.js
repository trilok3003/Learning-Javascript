let arr = [1, 2, 3];
let cloneArr = arr.slice();
let clone = [...arr];
let cloneA = arr //  Problem with Reference Values
// Mutable vs Immutable Data Types
/**
 * Mutable:
  // object
// array
// function
 */
/**
 * Immutable:
All primitives are immutable.
string
number
boolean
null
undefined
symbol
 */

// Shallow Copy Only
// Shallow copy means the first level is copied, deeper levels are referenced
// Please note spread only goes one level deep when copying an array. So if you're trying to copy a multi-dimensional arrays, you will have to use other alternatives.

// https://medium.com/@samanthaming