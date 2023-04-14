function Person(name) {
    this.name = name
}
Person.prototype.getName = function() {
    return this.name;
}
let trilok = new Person('trilok');
console.log(trilok.getName());
console.log(trilok instanceof Person)
console.log(trilok instanceof Object)
