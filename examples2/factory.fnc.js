let person1 = {
    firstName: 'trilok',
    lastName: 'singh',
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    },
};

console.log(person1.getFullName());
let person2 = {
    firstName: 'trilok2',
    lastName: 'singh',
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    },
};
console.log(person2.getFullName());

// so we get duplicate getFullName();
// using factory function
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName() {
            return firstName + ' ' + lastName;
        },
    };
}
let person11 = createPerson('John', 'Doe');
let person22 = createPerson('Jane', 'Doe');

console.log(person11.getFullName());
console.log(person22.getFullName());