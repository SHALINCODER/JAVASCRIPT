// .reduce() = reduce the elements of an array to a single value 



const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

             // accumulator = 0 starting value
             // previous element, next element
function sum(accumulator, element){  // previous element, next element, accumulator = 0 starting
    return accumulator+element; 
}
console.log(`${total.toFixed(2)}`)



// const grades = [75, 50, 90, 80, 65, 95];
// const maximum = grades.reduce(getMax);

// console.log(maximum);
// function getMax(accumulator, element){
//     return Math.max(accumulator,element);
// }