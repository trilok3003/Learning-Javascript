const x = 20;
const y = 100;
const z = 10;
let largest;
if(x >= y && x>= z) {
    largest = x;
}
else if(y >= x && y>= z) {
    largest = y;
}
else{
    largest = z;
}
console.log(largest);