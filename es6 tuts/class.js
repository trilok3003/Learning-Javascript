class Person {
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }
    details() {
        return `${this.name} and ${this.city}`
    }
}
let p1 = new Person('trilok', 'noida');