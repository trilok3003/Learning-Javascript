function RaceCar(make, model, year, color, topSpeed) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.topSpeed = topSpeed;
    this.drive = function() {
      console.log(`The ${this.make} ${this.model} is driving at ${this.topSpeed} mph.`);
    };
  }

  let myRaceCar = new RaceCar("Ferrari", "488 GTB", 2021, "red", 205);
  myRaceCar.color = "yellow";
  console.log(myRaceCar["topSpeed"]);

// Adding Methods to Object Constructors

RaceCar.prototype.drive1 = function() {
  console.log(`The ${this.make} ${this.model} is driving at ${this.topSpeed} mph.`);
};
  