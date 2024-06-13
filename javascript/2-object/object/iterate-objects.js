const population = {
    male: 4,
    female: 93,
    others: 10
  };
  
  // Iterate through the object
  for (const key in population) {
    if (population.hasOwnProperty(key)) {
      console.log(`${key}: ${population[key]}`);
    }
  }
  
  // Object.keys()
  console.log(Object.keys(population))
  // Object.values()
  console.log(Object.values(population))
  // Object.entries()
  console.log(Object.entries(population))
  for ([key, value] of Object.entries(population)){
    console.log(key);
  }
