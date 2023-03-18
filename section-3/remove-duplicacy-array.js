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
