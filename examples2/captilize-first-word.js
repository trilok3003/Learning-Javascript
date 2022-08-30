// Capitalize the First Letter of Each Word in JavaScript
const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

let newWords = words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");
console.log(newWords)
let string = 'freecodecamp'
let newString = string[0].toUpperCase() + string.substring(1);
console.log(newString);