function wonderfulFunction() {
    let count = 1
    function counter() {
        console.log(count++)
    }
    counter() // print 1
}
wonderfulFunction();
wonderfulFunction();

function wonderfulFunction1() {
    let count = 1
    function counter() {
        console.log(count++)
    }
   return  counter;
}
let closure = wonderfulFunction1();
closure();
closure();
closure();

