function print(params) {
    params.forEach(param => console.log(param));
}

print(['arg1', 'arg2']);
const array = [1, 2, 3];
console.log(...array) // 1 2 3
// copy an array
const b = [...array];
const c = [0, ...array, 4];
// merge two array
const first = [1, 2];
const other = [3, 4];

const combo = [...first, ...other];
// string
const word = 'test';
console.log([...word]);
// -> ["t", "e", "s", "t"]
// objects
// copy
const user = {
    name: 'Max',
    age: 42
};

const clonedUser = { ...user };
  // merging
  const x = { x: 1 };
const y = { y: 2 };

const coord = {...x, ...y};
console.log(coord);
// Note: Spread syntax only does a shallow copy meaning nested arrays or objects will not copy properly. The deeper data is still linked to the original.
// Rest Parameter
function sum(...args) {
    let result = 0;
  
    for (let arg of args) {
      result += arg;
    }
  
    return result
  }
  
  sum(4, 2) // -> 6
  sum(3, 4, 5, 6) // -> 18

  function family(spouse, ...children) {
    console.log(`Spouse: ${spouse}`);
    
    for(const child of children) {
      console.log(`Child: ${child}`);
    }
  }
  
  family('Veronica', 'Max', 'Jack');
  // -> Spouse: Veronica
  // -> Child: Max
  // -> Child: Jack

  const player = {
    name: 'Max Best',
    age: 42,
    game: 'Football'
  }
  
  const { name, ...rest } = player;
  console.log(name); // -> Max Best
  console.log(rest);
  // -> {age: 42, game: 'Football'}

//   Rest Parameter collects all remaining elements into an array.
// Spread Operator expands collected elements such as arrays into single elements.
// The spread syntax only does a shallow copy one level deep.
// Only the last parameter can be a rest parameter.