// every()
const nums = [34, 2, 48, 91, 12, 32];
let j = nums.every(n => n < 100);
// some()
let odd = nums.some(n => n % 2 == 1);
console.log(j);
console.log(odd);
// includes
const nums1 = [ 1, 3, 5, 7];
console.log(nums1.includes(3));
