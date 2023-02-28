let raceCar = {
    make: "Ferrari",
    model: "488 GTB",
    year: 2021,
    color: "red",
    topSpeed: 205,
    drive: function() {
      console.log("The " + this.make + " " + this.model + " is driving at " + this.topSpeed + " mph.");
    }
  };
  console.log(raceCar["topSpeed"]);
  raceCar.color = "yellow";
  raceCar["year"] = 2022;
  raceCar.drive();