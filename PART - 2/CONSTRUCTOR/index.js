// constructor = special method for defining the properties and methods of objects 

// // Car 1
// const car1 = {
//     make: "Ford",
//     model: "Mustang",
//     year: 2024,
//     color: "red",
//     drive: function() {
//         console.log(`You drive the ${this.model}`);
//     }
// };

// // Car 2
// const car2 = {
//     make: "Chevrolet",
//     model: "Camaro",
//     year: 2025,
//     color: "blue",
//     drive: function() {
//         console.log(`You drive the ${this.model}`);
//     }
// };

// // Car 3
// const car3 = {
//     make: "Dodge",
//     model: "Charger",
//     year: 2026,
//     color: "silver",
//     drive: function() {
//         console.log(`You drive the ${this.model}`);
//     }
// };

// // Calling the methods
// car1.drive();
// car2.drive();
// car3.drive();
                //shalin, 22, true
function Person(name, age, isStudent){
    this.name = name, //shalin //this.name is a variable 
    this.age = age, //22
    this.isStudent = isStudent, //true
    this.greet = function(){
        console.log(`My name is ${this.name}`);
    }
} // constructor function is a function that creates many objects 

const person1 = new Person("Shalin", 22, true);
const person2 = new Person("Keerthana", 22, true);
const person3 = new Person("Kowsalya", 22, true);

console.log(person1);
console.log(person2);
console.log(person3);

person1.greet()



// function Car(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function(){
//         console.log(`You drive the ${this.model}`);
//     }
// }

// const car1 = new Car("Ford", "Mustang", 2024, "red");
// const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
// const car3 = new Car("Dodge", "Charger", 2026, "silver");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);

// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);

// car1.drive();
// car2.drive();
// car3.drive();
