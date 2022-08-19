// normal function
function hello1() {
    return "hello Trilok";
}
hello2 = function () {
    return "hello Trilok";
}
// arrow function
hello3 =  () => {
    return "hello Trilok";
}
// Arrow Functions Return Value by Default:
hello4 =  () => "hello Trilok";
// arrow function with parameter

hello5 =  (value) => {
    return value;
}
hello6 =  (value) =>  value;

console.log(hello6('hello'))