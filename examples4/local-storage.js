// The localStorage object is a type of web storage
// that allows Javascript websites and apps to store and access data 
// right in the browser with no expiration date
localStorage.setItem("firstName", "trilok");
console.log(localStorage.getItem('firstName'))
localStorage.removeItem('id');
localStorage.clear();
let KeyName = localStorage.key(index)