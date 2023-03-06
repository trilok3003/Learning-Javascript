let useFilter = (arr) => {
    return arr.filter((ele, pos, array) => {
        return array.indexOf(ele) == pos;
    })
}
let useSet = (arr) => {
    return [...new Set(arr)];
}
let useReduce = (arr) => {
    return arr.reduce((x, y) => x.includes(y) ? x : [...x, y], []);
}
let useAssociative = (arr) => {
    let uniue = [];
    for(val of arr) {
        uniue[val] = 0
    }
    return [...Object.keys(uniue)]
}
let useIncludes = (arr) => {
    let uniue = [];
    for(val of arr) {
        if(!uniue.includes(val)) {
            uniue.push(val);
        }
    }
    return uniue;
}
// performance wise
// 1. set
// 2. associative
// 3. includes
// 4.filter
// 5. reduce