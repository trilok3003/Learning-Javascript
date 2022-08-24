let myString = "India";
// ist method
let myReverseStr = myString.split('').reverse().join('');
console.log(myReverseStr);
// 2nd method
let reverse = [...myString].reverse().join('');
console.log(reverse);
