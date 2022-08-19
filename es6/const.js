// let has block scope.

function hello() {
    const value = "hello";
    if (true) {
        const value1 = "hello world";
        console.log(value);
    }
    console.log(value1)
}
hello();