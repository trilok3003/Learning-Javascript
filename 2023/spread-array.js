// Spread with array
// array manipulation
// 1. merge array
let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log([...arr1, ...arr2])
// 2. clone array
console.log([...arr1]);
// string to array
console.log([..."trilok"])
// set to array
console.log([...new Set(arr)])
// arguments to array
// [...arguments]