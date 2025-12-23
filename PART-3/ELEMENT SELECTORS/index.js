// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()        // ELEMENT OR NULL
// 2. document.getElementsByClassName() // HTML COLLECTION
// 3. document.getElementsByTagName()   // HTML COLLECTION
// 4. document.querySelector()          // ELEMENT OR NULL
// 5. document.querySelectorAll()       // NODELIST


// ---------- 1. getElementById() ----------
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);


// ---------- 2. getElementsByClassName() ----------
const fruits = document.getElementsByClassName("fruits");

// Method 1: for...of loop
for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}

// Method 2: Array.from().forEach()
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});


// ---------- 3. getElementsByTagName() ----------
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

console.log(h4Elements);

// Style specific element by index
h4Elements[1].style.backgroundColor = "yellow";

// Style all elements with for...of loop
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow";
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen";
}

// Using Array.from().forEach()
Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
});


// ---------- 4. querySelector() ----------
const element = document.querySelector("li");

element.style.backgroundColor = "yellow";


// ---------- 5. querySelectorAll() ----------
const foods = document.querySelectorAll("li");

console.log(foods);

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
});