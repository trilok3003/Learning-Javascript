/**
 * Factors of Positive Number
 * The factor of 12 is 1, 2, 3, 4, 6, and 12.
 */
 const num = prompt('Enter a positive number: ');

 console.log(`The factors of ${num} is:`);
 
 // looping through 1 to num
 for(let i = 1; i <= num; i++) {
 
     // check if number is a factor
     if(num % i == 0) {
         console.log(i);
     }
 }