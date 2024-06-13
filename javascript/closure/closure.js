const myFunction = () => {
    let myValue = 2;
    console.log(myValue);

    const childFunction = () => {
         console.log(myValue += 1);
    }

    return childFunction;
}

const result = myFunction();
console.log(result);
result();
result();
result();

const add = (function () {
    let counter = 0;
    return function () {counter +=1 ; return counter};
   })();
   console.log(add());
   console.log(add());
   console.log(add());
   console.log(add());
   
