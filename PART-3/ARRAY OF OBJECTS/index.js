// Define an array of fruit objects with properties: name, color, and calories
const fruits = [
  {name: "apple", color: "red", calories: 95},
  {name: "orange", color: "orange", calories: 45},
  {name: "banana", color: "yellow", calories: 105},
  {name: "coconut", color: "white", calories: 159},
  {name: "pineapple", color: "yellow", calories: 37},
];

// Access and log the name of the first fruit (index 0)
console.log(fruits[0].name); // Output: "apple"

// ---------- push() ----------
// Add a new fruit object to the end of the array
fruits.push({name: "grapes", color: "purple", calories: 62});

// ---------- pop() ----------
// Remove the last fruit from the array
fruits.pop();

// ---------- splice() ----------
// Remove elements from array (can also add/replace)
fruits.splice(1,2); // Without parameters, this doesn't modify the array

// ---------- forEach() ----------
// Iterate through each fruit and log its name
fruits.forEach(fruit => console.log(fruit.name));

// ---------- map() ----------
// Create a new array containing only the names of fruits
const fruitNames = fruits.map(fruit => fruit.name);

// Create a new array containing only the colors of fruits
const fruitColors = fruits.map(fruit => fruit.color);

// Create a new array containing only the calories of fruits
const fruitCalories = fruits.map(fruit => fruit.calories);

// Log the mapped arrays
console.log(fruitNames);
console.log(fruitColors);

// ---------- filter() ----------
// Create a new array with only yellow fruits
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");

// Create a new array with fruits that have less than 100 calories
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

// Create a new array with fruits that have 100 or more calories
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

// Log the filtered arrays
console.log(yellowFruits);
console.log(highCalFruits);

// ---------- reduce() ----------
// Find the fruit with the maximum calories using reduce
// The accumulator (max) stores the fruit with highest calories found so far
const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);

// Find the fruit with the minimum calories using reduce
// The accumulator (min) stores the fruit with lowest calories found so far
const minFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);

// Log the fruits with max and min calories
console.log(maxFruit);  // Fruit with highest calories
console.log(minFruit);  // Fruit with lowest calories