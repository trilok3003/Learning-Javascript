const arr = ["aaaa", "aa", "aa", "aaaaa", "acc", "aaaaaaaa"];
const larget = arr.reduce((a, b) => a.length > b.length ? a : b, []);
console.log(larget);