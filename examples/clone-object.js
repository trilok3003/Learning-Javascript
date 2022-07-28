const person = {
    name: 'trilok',
    address: 'noida'
}
// const copy = person;
// console.log(person);
// console.log(copy);
// copy.name = 'john';
// console.log(person);
// console.log(copy);
// cloning the object
const clonePerson = Object.assign({}, person);
// cloning the object
const clonePerson1 = { ... person}
// cloning the object
const clonePerson2 = JSON.parse(JSON.stringify(person));

clonePerson.name = 'john';
clonePerson1.name = 'mohan'
console.log(person);
console.log(clonePerson);
console.log(clonePerson1);

