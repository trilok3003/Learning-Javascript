// es5
function msg(val) {
    return val;
}
// es6
let msg = (val) => {
    return val;
}

const person = {
    test() {
        setTimeout(() => {
            console.log(this) // test
        }, 2000)
        setTimeout(function () {
            console.log(this) // global
        }, 2000)
    }
}
person.test();