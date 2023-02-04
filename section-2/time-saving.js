// Object Destructuring
const user = {
    firstName: "John",
    lastName: "Doe",
    password: "123",
  };
  
  const { firstName, lastName, password } = user;
  
  console.log(firstName, lastName, password)

  // How to Merge Objects in ES6
  
  const userJob = {
    jobName: "Developer",
    jobCountry: "France",
    jobTimePerWeekInHour: "35",
  };

  const myNewUserObject = {
    ...user,
    ...userJob,
  };
  
  console.log(myNewUserObject);

  // How to Merge Arrays

  const girlNames = ["Jessica", "Emma", "Amandine"];
const boyNames = ["John", "Terry", "Alexandre"];

const namesWithSpreadSyntax = [...girlNames, ...boyNames];

console.log(namesWithSpreadSyntax);

// How to Remove Array Duplicates

  // old way

  const animals = ["owl", "frog", "canary", "duck", "duck", "goose", "owl"];

const uniqueAnimalsWithFilter = animals.filter(
  // Parameters example: 'owl', 0, ['owl', 'frog', 'canary', 'duck', 'duck', 'goose', 'owl']
  (animal, index, array) => array.indexOf(animal) == index
);

console.log(uniqueAnimalsWithSet);

// new way

const uniqueAnimalsWithSet = [...new Set(animals)];

console.log(uniqueAnimalsWithSet);

// ternary operator ?
const colour = "blue";

colour === "blue" ? console.log(`It's blue!`) : console.log(`It's not blue!`);
