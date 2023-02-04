// program to check if a key exists

const person = {
    id: 1,
    name: 'John',
    age: 23
}
console.log('name' in person);
console.log(person.hasOwnProperty('name'));
