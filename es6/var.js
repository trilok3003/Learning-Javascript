// var has a function scope, not a block scope.
function hello() {
    var value = "hello";
    if (true) {
        var value1 = "hello world";
        console.log(value);
    }
    console.log(value1)
}
console.log(value1);
hello()