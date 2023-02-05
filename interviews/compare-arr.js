let a = [];
let b = [];

// let a = undefined;
// let b = undefined;
// let a = null;
// let b = null;


// let a = NaN;
// let b = NaN;

let c = b;

console.log(a == b); // false
console.log(a === b); // false
console.log(b == c); // true
console.log(b === c); // true
// investigate
console.log(typeof a); // object
console.log(typeof b); // object
console.log(typeof c); // object

console.log(null == undefined); // true
console.log(null === undefined); // false

// answers 
// Return true if x and y refer to the same object. Otherwise, return false.




