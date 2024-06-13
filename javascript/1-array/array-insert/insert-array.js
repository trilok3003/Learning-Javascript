let arr = [1,2,3];
arr.unshift(0);
arr.push(4);
arr.splice(2, 0, 5);
console.log(arr);
let newArr = [].concat(arr, 6)
console.log(newArr);
