// The sessionStorage object stores data for only one session
// (the data is deleted when the browser tab is closed).
sessionStorage.setItem("firstName", "trilok");
console.log(sessionStorage.getItem('firstName'))
sessionStorage.removeItem('id');
sessionStorage.clear();
let KeyName = sessionStorage.key(index)