// Inheritance is implemented using prototypes when programming in JavaScript. 
let RaceCar = {
    make: "Ferrari",
    model: "488 GTB",
    year: 2021,
    color: "red",
    topSpeed: 205,
    drive: function() {
      console.log(`The ${this.make} ${this.model} is driving at ${this.topSpeed} mph.`);
    }
  };

  let ElectricRaceCar = Object.create(RaceCar);
ElectricRaceCar.batteryCapacity = "100 kWh";
ElectricRaceCar.charge = function() {
  console.log(`The ${this.make} ${this.model} is charging.`);
};
let myElectricRaceCar = Object.create(ElectricRaceCar);
myElectricRaceCar.make = "Tesla";
myElectricRaceCar.model = "Model S";
myElectricRaceCar.color = "white";
myElectricRaceCar.topSpeed = 155;
myElectricRaceCar.drive();
myElectricRaceCar.charge();

// keypoints
//  create objects (object literals , object constructors)
// add properties and methods
//  how to use prototypes and inheritance to create new objects with similar properties and methods as existing objects.