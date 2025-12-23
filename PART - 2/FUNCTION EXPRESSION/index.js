// function declaration = define a reusable block of code that performs a specific task

// function expressions = a way to define functions as values or variables 

// function hello(){
//     console.log("Hello");
// }

// const hello = function(){  // no hoisting 
//     console.log("Hello");
// }
// hello(); 


// setTimeout(hello, 3000);
// setTimeout(function(){  
//     console.log("Hello");
// }, 3000)

// const numbers = [1,2,3,4,5];
// const squares = numbers.map(squares);

// console.log(squares);

// function square(element){
//     return Math.pow(element,2);
// }

// const numbers = [1,2,3,4,5];
// const squares = numbers.map(function (element){
//     return Math.pow(element,2);
// });

// const evenNums = numbers.filter(function(element){
//     return element%2===0;
// });


// const total = numbers.reduce(function(accumulator, element){
//     return accumulator+element;
// });
// console.log(total);
// console.log(evenNums);
// console.log(squares);



//normal function declaration
function greet(){
    console.log("Hello World");
}
greet();

//function expression
const greet = function(){
    console.log("Hello World");
} //anonymous function

// greet();
// Arrow function expression
const greet = () => {
    console.log("Hello World");
    console.log("Hello Again");
};

greet();