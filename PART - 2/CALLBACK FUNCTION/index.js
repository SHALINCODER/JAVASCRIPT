// callback = a function that is passed as an argument
//            to another function


//             used to handle asynchronous operations
//             1. Reading a file
//             2. Netwok requests
//             3. Interacting with databases

//             "Hey, when you're done, call this next."

// hello(goodbye);

function hello(callback){ // first hello will execute then goodbye function will execute 
    setTimeout(function(){ //function expression or anonymous function
        console.log("Hello");
        callback();
    }, 3000);
}

// hello(goodbye);

// function goodbye(){
//     console.log("Goodbye!");
// }

// sum(displayConsole, 1, 2); //calling the function

// function sum(callback, x, y){
//     let result = x + y; // result = 3 
//     callback(result); //displayConsole(3)
// }

// function displayConsole(result){
//     console.log(result);
// }

// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }