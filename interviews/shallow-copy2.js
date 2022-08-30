let a = {
    name: "trilok"
}
let b =  Object.assign({}, a) // Object.assign
b.name = "amit";
console.log(a);
console.log(b);
console.log(a == b)
console.log(a === b)


