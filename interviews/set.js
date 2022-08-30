// Set
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
const unique = Array.from(new Set(numbers));
// const unique = [...new Set(numbers)];
console.log(unique);

const set = new Set(numbers);
const duplicates = numbers.filter(item => {
    if (set.has(item)) {
        set.delete(item);
    } else {
        return item;
    }
});

console.log(duplicates);