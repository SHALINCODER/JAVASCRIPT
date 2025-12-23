// arrow functions = a concise way to write functions expressions 
//                   good for simple functions that you use only once
//                   (paramters) => some code 

// function hello(){
//     console.log("Hello");
// }

// hello();

// const hello = (name, age) => console.log(`Hello ${name}
//                                         You are ${age} years old`);
// hello("Bro", 25);

// setTimeout(()=> console.log("Hello"), 3000);
const numbers = [1,2,3,4,5];

const squares = numbers.map((element)=> Math.pow(element,2));
const evenNums = numbers.filter((element)=> element%2===0);
const total = numbers.reduce((accumulator, element)=>accumulator+element);
console.log(total);
console.log(evenNums);
console.log(squares);