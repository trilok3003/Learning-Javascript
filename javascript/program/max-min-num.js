var numbers = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
var max = 0;

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max); // 74

var numbers = [4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
var min = numbers[0];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log(min); // 4