// ============================================
// EXAMPLE 1: Basic Object with Nested Object
// ============================================

// Creating a person object with properties including a nested address object
const person = {
  fullName: "Spongebob Squarepants",
  age: 30,
  isStudent: true,
  hobbies: ["karate", "jellyfishing", "cooking"],
  // Nested object: address is an object inside the person object
  address: {
    street: "124 Conch St.",
    city: "Bikini Bottom",
    country: "Int. Water"
  }
};

// Accessing top-level properties using dot notation
console.log(person.fullName);      // Output: Spongebob Squarepants
console.log(person.age);           // Output: 30
console.log(person.isStudent);     // Output: true

// Accessing array elements (hobbies is an array)
console.log(person.hobbies[2]);    // Output: cooking (third element, index 2)

// Accessing nested object properties using dot notation
console.log(person.address.country); // Output: Int. Water

// ============================================
// EXAMPLE 2: Iterating Through Nested Objects
// ============================================

// Using a for...in loop to iterate through properties of the address object
for(const property in person.address){
  // Accessing nested object properties using bracket notation
  console.log(person.address[property]);
}
// Output:
// 124 Conch St.
// Bikini Bottom
// Int. Water

// ============================================
// EXAMPLE 3: Object-Oriented Programming with Classes
// ============================================

// Nested objects = Objects inside of other Objects.
// Allows you to represent more complex data structures
// Child Object is enclosed by a Parent Object

// Examples of nested structures:
// Person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// Person class - the parent object
class Person{
  
  // Constructor accepts name, age, and address parameters
  // The ...address uses rest parameters to accept multiple address values
  constructor(name, age, ...address){
    this.name = name;
    this.age = age;
    // Creating a new Address object (nested object) using the spread operator
    this.address = new Address(...address);
  }
}

// Address class - the child object that will be nested inside Person
class Address{
  
  // Constructor accepts street, city, and country parameters
  constructor(street, city, country){
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

// Creating Person instances with nested Address objects
// The address parameters (street, city, country) are passed and used to create the Address object
const person1 = new Person("Spongebob", 30, "124 Conch St.",
                                            "Bikini Bottom",
                                            "Int. Waters");

const person2 = new Person("Patrick", 37, "128 Conch St.",
                                          "Bikini Bottom",
                                          "Int. Waters");

const person3 = new Person("Squidward", 45, "126 Conch St.",
                                            "Bikini Bottom",
                                            "Int. Waters");

// Accessing nested object properties through the class instances
console.log(person3.address.country); // Output: Int. Waters

// ============================================
// Key Concepts:
// ============================================

// 1. Nested Objects: Objects can contain other objects as properties
// 2. Dot Notation: person.address.street
// 3. Bracket Notation: person.address[property]
// 4. Rest Parameters (...address): Collects multiple arguments into an array
// 5. Spread Operator (...address): Expands array elements as separate arguments
// 6. Classes: Blueprint for creating objects with nested structures