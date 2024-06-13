// hoisting allows you to use functions and variables before they're declared.

// Variable hoisting with var
console.log(foo); // undefined

var foo = 'bar';

console.log(foo); // "bar"

// Variable hoisting with let and const

console.log(foo2); // Uncaught ReferenceError: Cannot access 'foo' before initialization

let foo2 = 'bar';  // Same behavior for variables declared with const

// Function hoisting in JavaScript

foo1(); // "foo"

function foo1() {
	console.log('foo');
}