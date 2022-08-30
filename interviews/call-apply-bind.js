// Call invokes the function and allows you to pass in arguments one by one.
// Apply invokes the function and allows you to pass in arguments as an array
// Bind returns a new function, allowing you to pass in a this array and any number of arguments

// call examples
// call(context, parameters)

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Hello'); // Hello Jon Kuperman
say.call(person2, 'Hello'); // Hello Kelly King

// appply(context, [parameters])

say.apply(person1, ['Hello']); // Hello Jon Kuperman
say.apply(person2, ['Hello']); // Hello Kelly King

// bind 
// bind(context)

function say1() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say1.bind(person1);
var sayHelloKelly = say1.bind(person2);

sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King