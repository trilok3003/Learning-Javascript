// Variables
const bookList = receivedBooks ?? [];
// Parameters
function calculateArea(width, height = 100) {
    return width * height;
  }
  
  const area = calculateArea(50);
  console.log(area); // 5000
// Objects
  const rectangle = { height: 400 };
const { height = 750, width = 500 } = rectangle;
console.log(height); // 400 - comes from rectangle object
console.log(width); // 500 - fallback to default