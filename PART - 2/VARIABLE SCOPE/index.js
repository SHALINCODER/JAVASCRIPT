// variable scope = where a variable is recognized
//                    and accessible (local vs global)


let x = 1; //global scope {} not in bracket -> global scope
// let x = 2;

function1()

let y = 5; 
function function1(){
    let x = 1; //local scope in bracket 
    console.log(x); 
}
function function2(){
    let x = 2; //local scope block scoped  
    console.log(x); 
}