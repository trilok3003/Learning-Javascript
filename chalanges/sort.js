var arr = [{ id: 1, text: 'BB' }, { id: 2, text: 'CC' }, { id: 3, text: 'AA' }];


arr.sort((a, b) => {
   return  a.text > b.text ? 1 : a.text < b.text ? -1 : 0
})

console.log(arr)