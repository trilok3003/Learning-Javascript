function Person(name, birthYear) {
   this.name = name;
   this.birthYear = birthYear;
   this.getAge = function() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
   }
}

let person1 = new Person('james', 1992);
console.log(person1.getAge());