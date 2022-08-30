//  1)  3 ways to declare variables: var, let, and const
// var global scope or function scope, can be redclared, can be dclared without initlization, can be updated
// let block scope, never redclared, can be dclared without initlization, can be updated
// const block scope, never redclared, never dclared without initlization, never updated

// 2) == vs === in 
// == only checks for the value
// === checks for value + type

// 3) array methods map, filter, find, reduce, and forEach
//  map creates a new copy of the original array

const a = [1, 2, 3, 4, 5]
const d = a.map(function (item) { return item * 2 })
console.log(d) // [2,4,6,8,10]

// filter creates a new array with elements that meet the given condition(s).
const words = ['react', 'script', 'interview', 'style', 'javascript']
const ans = words.filter((word) => word.length > 6)
console.log(ans) // ['interview', 'javascript']

// forEach is very similar to map but has two key differences:
// First of all, map returns a new Array, but forEach doesn't
// And second, you can do method chaining in map but not in forEach.

function consoleEven(arr) {
    let data = arr.forEach((num) => (num % 2 === 0 ? num * 2 : num * 1))
    console.log(data) // undefined
}

// consoleEven(arr)

function consoleEven1(arr) {
    let data = arr
        .map((num) => (num % 2 === 0 ? num * 2 : num * 1))
        .map((item) => (item % 2 === 0 ? item / 2 : item / 1))

    console.log(data)
}
// consoleEven1(arr)

// 4) Functional Programming


function n() {
    console.log('I am a normal function');
}

const ar = () => {
    console.log('I am an arrow function')
}
   // 5) Function Scope
   // There are three types of scope:
//    Global (declaration outside of any function)
// Function (declaration inside a function)
// Block (declaration inside a block)

// 6) Closures in JavaScript 

const greet = () =>  {
    const prefix = 'Mr'
    return (name) => {
        console.log(`${prefix} ${name}, welcome!`)
    }
}

console.log(greet()('Jack'))

function x() {
    var a = 7
    function y() {
      console.log(a)
    }
    return y
  }
  
  var z = x()
  console.log(z) // [Function: y]
  z()

  // 7)) Advantages of Closures 
  // Currying

  let add = function (x) {
    return function (y) {
      console.log(x + y)
    }
  }
  
  let addByTwo = add(2)
  addByTwo(3)

  // Data Hiding/Encapsulation

  function Counter() {
    var count = 0
    this.incrementCount = function () {
      count++
      console.log(count)
    }
  }
  
//   console.log(count) // Error: count is not defined
  var adder = new Counter()
  adder.incrementCount() // 1

  // 8)) disadvamtage of closure
  // Overconsumption of memory or memory leaks can happen

  // 9)) Hoisting in JavaScript
  // This is JavaScript's default behavior of moving declarations to the top of the program.
  // var declaration is hoisted up and initialized with undefined.
// let and const declarations are hoisted up but not initialized.
// function definitions are also hoisted up and stored as they are.

// 10) Objects in JavaScript 
// Just like arrays, objects are a way of storing data. We do so with the help of key-value pairs.

const developer = {
    name: "Raj",
    age: 22
    }

 // 11)   provides context
 
 
console.log('this', this)

// Polyfills in JavaScript
// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.