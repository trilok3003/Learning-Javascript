function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return factorial(n-1) * n;
    }
}
 console.log(factorial(1));
 console.log(factorial(5));
 console.log(factorial(10));

//  function factorial(n) {
//     let result = 1;
//     for (n > 1) { // while
//         result *= n;
//         n--;
//     }
//     return result;
// }