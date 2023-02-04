/**
 * to Merge Property of Two Objects
 */
const person = {
    name: 'abc',
    age: 24
}
const student = {
  gender: 'male'
}
// using assign
const merger = Object.assign(person, student);
// using spread operator
const merger1 = {...person, ...student}

console.log(person);
console.log(student);
console.log(merger);
console.log(merger1);
