/**
 * to Print the Fibonacci Sequence
 * exa: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
 */
 const number = parseInt(prompt('Enter the number of terms: '));
 let n1 = 0, n2 = 1, nextTerm;
 for(let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
 }
