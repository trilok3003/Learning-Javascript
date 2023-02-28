// In ES6 and later versions of JavaScript, we can also use classes to define object constructors.
class RaceCar {
    constructor(make, model, year, color, topSpeed) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.topSpeed = topSpeed;
    }
  
    drive() {
      console.log(`The ${this.make} ${this.model} is driving at ${this.topSpeed} mph.`);
    }
  }
  let myRaceCar = new RaceCar("Ferrari", "488 GTB", 2021, "red", 205);
  myRaceCar.color = "yellow";