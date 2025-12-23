// forEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback) to each element


//             array.forEach(callback)
//             element, index, arrary are provided


let numbers = [1,2,3,4,5]; //square each number 

console.log(numbers);
 //array.forEach(callback)
  // element, index, array are provided
numbers.forEach(displaySquare);


// element = 1 2 3 4 5 for each iteration
// index = 0 1 2 3 4 for each iteration
// array = [1,2,3,4,5] same array for each iteration
function displaySquare(element, index, array){ //eia
    array[index] = element * element; //numbers[1] = 2*2;
}

console.log(numbers)
// numbers.forEach(display);
// numbers.forEach(double);

// function double(element, index, array){
//     array[index] = element * 2;
// }
// function display(element){
//     console.log(element);
// }

// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(display);
// fruits.forEach(upperCase);

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }

// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
// }


// function display(element){
//     console.log(element);
// }