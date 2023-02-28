// real example : house
// ex1: crating object with Object Literals
const myHouse = {
    type: 'Ranch',
    bedrooms: 3,
    bathrooms: 2,
    location: {
        city: 'San Francisco',
        state: 'California',
        country: 'USA'
    },
    isForSale: true,
    getPrice: function () {
        return this.isForSale ? 350000 : 'Not for sale';
    }
};
// ex1: crating object with  Constructors
function BeachHouse(type, bedrooms, bathrooms, location, isForSale) {
    this.type = type;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.location = location;
    this.isForSale = isForSale;
    this.getPrice = function () {
        return this.isForSale ? 500000 : 'Not for sale';
    };
}
const myBeachHouse = new BeachHouse('Beach House', 4, 3, {
    city: 'Miami',
    state: 'Florida',
    country: 'USA'
}, true);

// Adding Properties and Methods to Objects
cottage.soldDate = '2022-01-01';
cottage.printSoldDate = function () {
    console.log(`Sold on ${this.soldDate}`);
};

delete cottage.isForSale;
// Accessing Object Properties and Methods
console.log(`My house has ${myHouse.bedrooms} bedrooms`);
console.log(`The price of my house is ${myHouse.getPrice()}`);

// get object properties
for (let key in myHouse) {
    console.log(`${key}: ${myHouse[key]}`);
}
const keys = Object.keys(myHouse);
for (let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]}: ${myHouse[keys[i]]}`);
}
// Object Inheritance and Prototypes
// JavaScript objects can inherit properties and methods from other objects, which can help us avoid duplication and create more organized code. This is known as object inheritance.
const HousePrototype = {
    type: 'Unknown',
    bedrooms: 0,
    bathrooms: 0,
    location: {
      city: 'Unknown',
      state: 'Unknown',
      country: 'Unknown'
    },
    isForSale: false,
    getPrice: function() {
      return this.isForSale ? 0 : 'Not for sale';
    }
  };
  const myNewHouse = Object.create(HousePrototype);
  Object.setPrototypeOf(myHouse, HousePrototype);
  // Creating Object Instances from Classes

  class House {
    constructor(type, bedrooms, bathrooms, location, isForSale) {
      this.type = type;
      this.bedrooms = bedrooms;
      this.bathrooms = bathrooms;
      this.location = location;
      this.isForSale = isForSale;
    }
  
    getPrice() {
      return this.isForSale ? 0 : 'Not for sale';
    }
  }
  const myHouse1 = new House('Ranch', 3, 2, {
    city: 'San Francisco',
    state: 'California',
    country: 'USA'
  }, true);
