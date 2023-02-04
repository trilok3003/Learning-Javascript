let a = {
    name: "trilok"
}
let b = {...a}; // Spread operator
b.name = "amit";
console.log(a);
console.log(b);
console.log(a == b)
console.log(a === b)

// arrays
const a1 = [1,2,3]
let b1 = [...a1]  // spread operators
b1[1] = 4
console.log(b1[1]) // 4
console.log(a1[1]) // 2
// Array functions — map, filter, reduce (These methods will return a new array )


