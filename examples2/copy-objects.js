// 1:  shallow copy (Both spread (...) and Object.assign())
// 2: deep copy (JSON methods)
let person = {
    firstName: 'trilok',
    lastName: 'Singh'
};
let person1 = {
    firstName: 'trilok',
    lastName: 'Singh',
    address: {
        city: 'delhi'
    }
};
// let copiedPerson = person;
// copiedPerson.firstName = "anil";

let copiedPerson = Object.assign({}, person);
copiedPerson.firstName = "anil";

console.log(person)
console.log(copiedPerson);

// let copiedPerson1 = Object.assign({}, person1); // shallow
// copiedPerson1.address.city = "noida";
// console.log(person1)
// console.log(copiedPerson1);

let copiedPerson2 = JSON.parse(JSON.stringify(person1));
copiedPerson2.address.city = "noida";

console.log(person1)
console.log(copiedPerson2);
