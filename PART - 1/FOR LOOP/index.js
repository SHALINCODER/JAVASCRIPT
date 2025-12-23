// for loop = repeat some code a limited amount of times

// for(let i = 1; i<=10; i++){
    
//     console.log("Hello World!");
// }

// for(let i = 1; i<=10; i+=2){
    
//     console.log("Hello World!");
// }
// for(let i = 10; i>=1; i--){
    
//     console.log("Hello World!");
// }
for(let i=1; i<=20; i++){
    if(i===12){
        continue; //breaks  - breaks out of loop, continue - skips an iteration
    }
    else{
        console.log(i);
    }
}