var user = {
    firstName : 'Trilok',
    lastName : 'Singh',
    emailId : 'trilok@gmail.com',
    age : 29
}
console.log(user.firstName);
console.log(user['lastName']);
let age = "age"
console.log(user[age]);
// adding new property
user.fullname = user.firstName + " " +user.lastName;
// delete property
delete user.age;

// constructor function
// using constructor function
function User1(firstName, lastName, emailId, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
    this.age = age;
}

var user2 = new User1('John', 'Cena', 'john@gmail.com', 45);

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  var user2 = {
    firstName : 'Ramesh',
    lastName : 'Fadatare',
    emailId : 'ramesh@gmail.com',
    age : 29,
    getFullName : function (){
        return user.firstName + " " + user.lastName;
    }
}

user2.getFirstName = function(){
    return this.firstName;
}
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "en",
    get lang() {
      return this.language;
    },
    set lang(lang) {
        this.language = lang;
      }
  };
/**
 * ref https://www.javaguides.net/2019/04/guide-to-javascript-objects.html
 */