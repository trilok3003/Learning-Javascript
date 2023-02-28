function withoutClosure() {

    var date = new Date();

    return date.getMilliseconds();
}
setTimeout(() => {
    console.log(withoutClosure())
    console.log(withoutClosure())
}, 5000)

function withClosure() {

    var date = new Date();

    return function() {
        return date.getMilliseconds();
    }
}
setTimeout(() => {
    console.log(withClosure()())
    console.log(withClosure()())
}, 5000)