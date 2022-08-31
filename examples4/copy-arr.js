let numbers = [1,2,3,4,5]

// using spread operators
let numbers1 = [...numbers];
console.log(numbers1)
// using slice()
let numbers2 = numbers.slice()
console.log(numbers2)
numbers1.push(6)
numbers2.push(6)
console.log(numbers)
console.log(numbers1)
console.log(numbers2)


