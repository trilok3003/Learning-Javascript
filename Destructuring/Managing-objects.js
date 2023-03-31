// Destructuring
const rectangle = { h: 100, w: 200 };
const {h, w} = rectangle;
const {h: height, w: width} = rectangle;
function getPerson() {
    return {
      firstName: 'Max',
      lastName: 'Best',
      age: 42
    }
  }
  const { age } = getPerson();
  const { age: ageN , ...person } = getPerson();
console.log(person); // Now the person object holds all properties from the original person object except age.

// Destructuring in Arrays
const colorArr = ["red", "yellow", "blue", "green", "white", "black"];
const [first, second] = colorArr;
console.log(first, second);
// swap variables
let data = ['a', 'b'];
let [one, two] = data;
console.log(one, two);
[one, two] = [two, one]
console.log(one, two);
// Destructuring in Objects
const freeCodeCamp = {
    frontend: "React",
    backend: "Node",
    database: "MongoDB",
  };
  
  const { frontend, backend } = freeCodeCamp;
  console.log(frontend, backend);
  const { frontend: courseOne, backend: courseTwo } = freeCodeCamp;
console.log(courseOne, courseTwo);
