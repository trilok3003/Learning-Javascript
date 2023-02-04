// 1 How to Empty an Array in JavaScript //Popular
array = [1, 2, 4, 5];
array1 = [1, 2, 4, 5];

array.length = 0;
array1 = [];
// 2 Find Number of Properties in a JavaScript Object 
// Object.keys().length
// 3 How to Delete a Property of an Object in JavaScript //Popular
// delete user.firstName;
/**
 * How to Copy an Array in JavaScript
 */
const users = ['ramesh', 'tony', 'stark', 'vijay', 'prabhas'];

const users1 = users.slice() // creates the copy using slice()


const users2 = [...users] // creates the copy using spread operator

console.log(users1);
/**
 * Get the Last Element of the Array in JavaScript
 */
let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const lastElement = elements[elements.length - 1];
/**
 * How to find Object length in JavaScript
 */
let user = {
    name: 'trilok'
}
console.log(Object.keys(user).length);
console.log(Object.values(user).length);
/**
 * Convert Array to a String in JavaScript
 */
const strArry = ['r', 'a', 'm', 'e', 's', 'h'];
console.log(strArry.join());
console.log(strArry.toString());
console.log(strArry + '');
/**
 * JavaScript LocalStorage Methods - setItem(), getItem(), removeItem() clear() and key() Example //Popular
JavaScript SessionStorage Methods - setItem(), getItem(), removeItem() clear() and key() Example //Popular
 */
/**
 * Encode and Decode URL in JavaScript
 * encodeURL()
 * encodeURIComponent()
 * decodeURI()
 * decodeURIComponent() 
 */
/**
 * How to Check undefined in JavaScript?
 */
var x;
if (typeof x === "undefined") {
    console.log("x is undefined");
} else {
    console.log("x is defined");
}
/**
 * How to Check If a JavaScript Object Property Is undefined?
 */
if (typeof user.firstName === 'undefined') {
    console.log("User first name is undefined");
}
/**
 * How to Delete a Property of an Object
 */
//  delete user.firstName;
/**
 * Find Number of Properties in a JavaScript Object
 */
let count = Object.keys(user).length;
     /**
 * Remove Object from an Array of Objects in JavaScript
 */
     // get index of object with id:37
// var removeIndex = users.map(function(item) { return item.id; }).indexOf(37);

// remove object
// users.splice(removeIndex, 1);
/**
 * Loop or Iterate through an Array of Objects in JavaScript
 * forEach()
 * For of loop
 */

/**
 * Loop or Iterate over an Object in JavaScript 
 * Object.keys() and for of loop
 * Object.entries() and for of
 */
/**
 * Different Ways to Create Objects in JavaScript 
 * four ways
 * Using object literals or object initializers
Using a constructor function
Using the Object.create() method
Using ES 6 Class
 */
/**
 * JavaScript JSON
 * 1: Convert a JavaScript Object to JSON String (JSON.stringify() )
 * 2: Convert JSON String into JavaScript Object  (JSON.parse())
 */