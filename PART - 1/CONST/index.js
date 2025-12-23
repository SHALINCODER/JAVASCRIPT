// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;
// // PI= 3; ERROR 

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// circumference = 2*PI*radius;
// console.log(circumference);


document.getElementById("submit").addEventListener("click", function(){
    radius = document.getElementById("radius").value;
    
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("myH1").textContent = `The circumfernce of the circle is: ${circumference}`;
});