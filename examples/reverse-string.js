/**
 *  Reverse a String Using built-in Methods
 */

function reverseString(str) {
  const arrayStrings = str.split("");
  const reverseArray = arrayStrings.reverse();
  const joinArray = reverseArray.join("");
  return joinArray;
}

/**
 * Reverse a String Using for Loop
 */
 function reverseString1(str) {
    let empty = "";
    for (let i = str.length -1; i>=0; i--) {
        empty += str[i];
    }
    return empty;
 }
console.log(reverseString("hello"));
console.log(reverseString1("hello"));
