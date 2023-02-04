const word = "trilok";
const first = word.charAt(0).toLocaleUpperCase();
// const remain = word.substring(1);
const remain = word.slice(1);
const capWord= first + remain;
console.log(capWord);