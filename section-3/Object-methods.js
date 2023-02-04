let name = {
    first: 'trilok',
    last: 'singh'
}
console.log(Object.getOwnPropertyNames(name));
let name1 = Object.create(name);
console.log(name1)
console.log(name1.first);
Object.defineProperty(name, 'fullName', {
    value: name.first + " " + name.last
})
console.log(name.fullName);

const original = {
    name: 'Fiesta',
    car: {
      color: 'blue'
    }
  }
  const copied = Object.assign({}, original)
  
  original.name = 'Focus'
  original.car.color = 'yellow'
  
  copied.name //Fiesta
  copied.car.color //yellow

  for (let [key, value] of Object.entries(name)) {
    console.log(`${key}: ${value}`);
  }
  let count = Object.keys(name).length;
  console.log(count);
