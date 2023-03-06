// 5 Way to Append Item to Array in JavaScript
// mutative (push, splice)
const arr = [1,2,3];
arr.push(4);
arr.splice(arr.length, 0, 5);
arr[arr.length] = 6;
// non mutative (concat, spread)
const original = [1,2,3];
let newArr = original.concat(4);
newArr = [...original, 5];
console.log(newArr);