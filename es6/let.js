// let has block scope.

function hello() {
    let value = "hello";
    if (true) {
        let value1 = "hello world";
        console.log(value);
    }
    console.log(value1)
}
hello();