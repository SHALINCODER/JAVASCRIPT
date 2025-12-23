// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring
//                 5 examples
//example - 1 swap the value of two variable

// let a = 1;
// let b = 2;

// [a,b] = [b,a];
// console.log(a,b);


//example - 2 swap 2 elements in ana array
const colors = ["red","green", "blue", "black","white"];


// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

console.log(extraColors);

// example - 4 extract values from objects 

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age:30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const {firstName, lastName, age, job="unemployed"} = person1;
console.log(firstName);


console.log(lastName);
console.log(age);
console.log(job);

//destructure in function parameters


function displayPerson({firstName, lastName,age,job}){
    console.log(`name:  ${firstName} ${lastName} `);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`)
}


displayPerson(person1);