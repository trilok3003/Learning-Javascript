// handle callback
const myPromise = new Promise((resolve, reject) => {
    const activtiy = true;
    if (activtiy) {
        resolve('yes')
    }
    else {
        reject('no')
    }
});
myPromise.then(r => {
    console.log(r);
}).catch(e => {
    console.log(e);
}) 