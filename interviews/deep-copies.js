const a = {
    foods: {
      dinner: 'Pasta'
    }
}

let b = JSON.parse(JSON.stringify(a))
b.foods.dinner = 'Soup'
console.log(b.foods.dinner) // Soup
console.log(a.foods.dinner) // Pasta