class Person {
    constructor(name) {
        this.name = name
    }
    getName() {
    return this.name;
    }
}

let trilok = new Person('trilok');
console.log(trilok.getName());
console.log(typeof Person)