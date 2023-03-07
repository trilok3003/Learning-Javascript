// es5 
var person = {
    name: "trilok",
    city: "noida"
}
var name = person.name;
var city = person.city;
// es6
let personDetails = {
    name: "trilok",
    city: "noida"
}
let {name, city: city_name} = personDetails;

// array
var arr = [1,2,3,4,5];
var a1 = arr[0];

let [a1, a2] = arr;