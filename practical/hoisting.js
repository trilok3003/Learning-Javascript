console.log(x); // undefined
var x = 10;

sayHello(); // "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}

function sayHello() {
    var message = "Hello, World!";
    console.log(message);
  }
  
  sayHello(); // "Hello, World!"
  console.log(message); // ReferenceError: message is not defined