newArr = [1,2,3,4,5];
oldArr = [6,7,8,9];
newObj = {name: 'hello'}
oldObj = {msg: 'world'}
let myString = "freeCodeCamp";
// merge
let merge = [...newArr, ...oldArr];
let merge1 = {...newObj, ...oldObj};
console.log(merge);
console.log(merge1);
// copy
let copy = [...newArr];
let copy1 = {...newObj};
console.log(copy);
console.log(copy1);
// Unique Elements
let fruits = ["Mango", "Apple", "Mango", "Banana", "Mango"];
let uniqueFruits = [...new Set(fruits)];
console.log(uniqueFruits);
// in function
const add = (a, b, c) => {
    console.log(a+b+c);
}
let data = [2,3,4]
add(...data)
add.apply(null, data);
add.call(null, 2,3,4);
// string
let splitString = [...myString];
console.log(splitString);
// Rest operator
const myFunction = (name1, ...rest) => { // used rest operator here
    console.log(name1);
    console.log(rest);
};
let names = ["John", "Jane", "John", "Joe", "Joel"];
myFunction(...names);
