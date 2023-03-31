const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

// 2nd
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);