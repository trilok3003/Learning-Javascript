const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
// using numbers.indexOf
const duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
console.log(duplicates);
// using Set
const duplicates1 = numbers.filter(item => {
    if (set.has(item)) {
        set.delete(item);
    } else {
        return item;
    }
});
console.log(duplicates1);
