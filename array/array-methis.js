// includes
const fruits = ['apple', 'banana'];
console.log(fruits.includes('appple')) // true
// indexOf()
console.log(fruits.indexOf('appple'))
// find()
const peopleAges = [10, 12, 21, 18, 38];

const firstAdult = peopleAges.find(age => age > 18);

console.log(firstAdult);// expected output: 21
// filter()
const ages = [25, 41, 37, 12, 10, 18, 14]
const canDrive = ages.filter(age => age >= 16)

console.log(canDrive) // returns [25,41,37,18]