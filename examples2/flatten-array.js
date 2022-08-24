function flattenArray(inputArr) {
  let outArr = [];
  recursion(0, inputArr, outArr);
  return outArr;
}
function recursion(index, inputArr, outArr) {
    if(index >= inputArr.length) return;
    if(Array.isArray(inputArr[index])) {
        recursion(0, inputArr[index], outArr);
    }
    else{
        outArr.push(inputArr[index]);
    }
    recursion(index + 1, inputArr, outArr);
}
let flt = flattenArray([1,2, [3,4],5, [6,7]]);
console.log(flt);