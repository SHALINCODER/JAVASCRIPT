// Error = An Object that is created to represent a problem that occurs
// Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (Optional) Always executes. Used mostly for clean up
//               ex. close files, close connections, release resources

// EXAMPLE 1: Basic try-catch-finally structure
console.log("=== EXAMPLE 1: Basic Structure ===");
try {
    console.log(x);
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}
catch(error) {
    console.error(error);
}
finally {
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always runs");
}

// EXAMPLE 2: Division with basic error handling
console.log("\n=== EXAMPLE 2: Basic Division ===");
try {
    const dividend = window.prompt("Enter a dividend: ");
    const divisor = window.prompt("Enter a divisor: ");
    
    const result = dividend / divisor;
    console.log(result);
}
catch(error) {
    console.error(error);
}

console.log("You have reached the end!");

// EXAMPLE 3: Division with validation and custom errors
console.log("\n=== EXAMPLE 3: Division with Validation ===");
try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));
    
    if(divisor == 0) {
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be a number");
    }
    
    const result = dividend / divisor;
    console.log(result);
}
catch(error) {
    console.error(error);
}