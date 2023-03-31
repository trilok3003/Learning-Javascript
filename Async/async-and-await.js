// async and await make promises easier to write
// async makes a function return a Promise
// await makes a function wait for a Promise
async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  myDisplay();