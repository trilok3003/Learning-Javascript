/**
 * How to Remove Array Duplicates in ES6
 */
const arr = [1,1,2,2,3,3,4,5,5,6,6];

// 1. Set
let unique = [...new Set(arr)]
console.log(unique);
// 2. filter
let uniqueFilter = arr.filter((item, index, array) => array.indexOf(item) === index);
console.log(uniqueFilter);
let uniqueReduce = arr.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
console.log(uniqueReduce);
