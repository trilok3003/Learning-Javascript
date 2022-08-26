// &&
// instead of
if (accessible) {
    console.log("It’s open!");
}

// use
accessible && console.log("It’s open!");

// || 

// instead of
if (price.data) {
    return price.data;
} else {
    return 'Getting the price’';
}

// use
return (price.data || 'Getting the price');

// ~~ (largest integer converter)

// instead of
Math.floor(Math.random() * 50);

// use
~~(Math.random() * 50);

~~('whitedress') // returns 0
~~(NaN) // returns 0

// Empty array

let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

console.log(array.length); // returns the length as 10

array.length = 4;

console.log(array.length); // returns the length as 4
console.log(array); // returns ['a', 'b', 'c', 'd']


array.length = 0;

console.log(array.length); // returns the length as 0
console.log(array); // returns []

// Merge Array without loaded server

let list1 = ['a', 'b', 'c', 'd', 'e'];
let list2 = ['f', 'g', 'h', 'i', 'j'];

console.log(list1.concat(list2));

console.log(list1.push.apply(list1, list2)); // returns 10, the new length of list1
console.log(list1); // returns ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// Filter
const cars = [
    { make: 'Opel', class: 'Regular' },
    { make: 'Bugatti', class: 'Supercar' },
    { make: 'Ferrari', class: 'Supercar' },
    { make: 'Ford', class: 'Regular' },
    { make: 'Honda', class: 'Regular' },
]
const supercar = cars.filter(car => car.class === 'Supercar');
console.table(supercar);

// You can also use filter() together with Boolean to remove all null or
const cars1 = [
    { make: 'Opel', class: 'Regular' },
    null,
    undefined
]

cars1.filter(Boolean); // returns [{ make: 'Opel', class: 'Regular' }] 

// Extract Unique Values
const cars2 = ['Opel', 'Bugatti', 'Opel', 'Ferrari', 'Ferrari', 'Opel'];
const unrepeated_cars = [...new Set(cars2)];

console.log(unrepeated_cars)


// Replace

const grammar = 'synonym synonym';

console.log(grammar.replace(/syno/, 'anto')); // this returns 'antonym synonym'
console.log(grammar.replace(/syno/g, 'anto')); // this returns 'antonym antonym'