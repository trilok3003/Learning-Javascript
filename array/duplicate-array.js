/**
 * to Remove Duplicates From Array
 */
// using set
function getUnique(arr) {
 let unique = [...new Set(arr)];
 console.log(unique);
}
// using for loop

function getUniqueLoop(arr) {
    let unique = [];
    for(let i of arr) {
      if(unique.indexOf(i) === -1) {
          unique.push(i);
      }
    }
    console.log(unique);
  }
const array = [1, 2, 3, 2, 3];

// calling the function
getUnique(array);
getUniqueLoop(array);

