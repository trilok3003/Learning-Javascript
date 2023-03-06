// old way
let Meal = function (food) {
    this.food = food;
}
Meal.prototype.eat = function () {
    return 'eatting';
};
// new Way
class Meal1 {
    constructor(food) {
        this.food = food;
    }
    // Prototype Method
    eat() {
        return 'eatting';
    }
}