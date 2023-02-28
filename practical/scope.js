// function-scoped
function foo() {
    var x = 10;
    if (true) {
      var x = 20; // same variable as above
      console.log(x); // outputs 20
    }
    console.log(x); // also outputs 20
  }
  
  foo();
// block scope
  function foo1() {
    var x = 10;
    if (true) {
      let x = 20; // new variable with block scope
      console.log(x); // outputs 20
    }
    console.log(x); // outputs 10
  }
  
  foo1();
  // block scope with let
  function foo2() {
    for (let i = 0; i < 3; i++) {
      console.log(i); // outputs 0, 1, 2
    }
    console.log(i); // ReferenceError: i is not defined
  }
  
  foo2();
  const x = 10;
x = 20; // TypeError: Assignment to constant variable.

/**
 * Use var when:
You’re working with older JavaScript code that uses var
You need to declare a variable that has function-level scoping
You want to declare a variable that can be hoisted to the top of its scope

Use let when:

You need to declare a variable that has block-level scoping
You want to declare a variable that cannot be hoisted to the top of its scope
You need to reassign the value of a variable

Use const when:

You need to declare a variable that has block-level scoping
You want to declare a variable that cannot be reassigned after it is declared
You want to ensure that an object or array cannot be modified
 */