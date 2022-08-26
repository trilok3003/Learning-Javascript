name = 'Jack';

// Using var
var price = 100;

// Using let
let isPermanent = false;

// Using const
const PUBLICATION = 'freeCodeCamp'
// There are mainly three types of scope:

// Block Scope  
// Functional Scope  
// Global Scope

// Block Scope  
{
    let f_name = 'Alex';
    const ZIP = 500067;
    var age = 25;
}

console.log(f_name); // Uncaught ReferenceError: f_name is not defined
console.log(ZIP);  // Uncaught ReferenceError: ZIP is not defined
console.log(age);  // 25
// function scope

function f1() {
    let f_name = "Alex";
    const ZIP = 560089;
    var age = 25;
}

f1();
console.log(f_name); // Uncaught ReferenceError: f_name is not defined
console.log(ZIP);  // Uncaught ReferenceError: ZIP is not defined
console.log(age);  // Uncaught ReferenceError: age is not defined

//  Global Scope
// access everywhere

// var: The functional scope level
// let: The block scope level
// const: The block scope level

// Reassign Value

  // var:  Allowed
  // let:  Allowed
  // const:  Not Allowed

// If Access Before Declare

  // var: undefined
  // let: Reference Error
  // const: Reference Error
