// using object literal
// program to create JavaScript object using 
// 1. object literal
const person = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);
// 2. program to create JavaScript object using instance of an object
const person1 = new Object ( { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
});

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);
// 3rd way
// program to create JavaScript object using instance of an object

function Person() {
    this.name = 'John',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyone.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const person3 = new Person();

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);

// 1. function constructor
// 2. object literals:
// 3.  Object.create() 
// 4. Es6 Classs
// 5. Object Constructor