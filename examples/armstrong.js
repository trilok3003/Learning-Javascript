/**
 * to Check Armstrong Number
 * abcd... = a^n + b*n + c^n + d^n + ...
 * ex: 153 = 1*1*1 + 5*5*5 + 3*3*3
 * 1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4
 */

 const number = prompt('Enter a three-digit positive integer: ');
 let sum = 0;
 let temp = number;
 while(temp > 0) {
    let reminder = temp % 10;
    sum += reminder * reminder * reminder;
    temp = parseInt(temp/10);
 }
 if(number == sum) {
    console.log(`${number} is armstrong`)
 }
 else{
    console.log(`${number} is not armstrong`)
 }

