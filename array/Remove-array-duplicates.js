// https://javascript.plainenglish.io/7-useful-javascript-tricks-and-tips-fdf92dd9b869

// using Set 
let array = [1,2,3,4];
const uniqueArray = [...new Set(array)]

let arr = [
    {name: 'trilok'},
    {name: 'trilok1'},
    {name: 'trilok2'},
    {name: 'trilok3'},
    {name: 'trilok'},
    {name: 'trilok1'},
    {name: 'trilok'},
    ]
    console.log(arr);
    arr = arr.filter((val, i, self) => 
    i === self.findIndex((t) => t.name === val.name)
    )
    console.log(arr);
    