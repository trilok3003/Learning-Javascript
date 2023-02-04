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