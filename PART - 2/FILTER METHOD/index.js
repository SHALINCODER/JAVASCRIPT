// .filter() = creates a new array bu filtering out elements




let numbers = [1,2,3,4,5,6,7];

let evenNums = numbers.filter(isEven); //isEven is a callback function
console.log(evenNums);


function isEven(element, index, array){ 
    return element%2===0; //even number
}






// const ages = [16, 17, 18, 19, 20, 60];
// const adults = ages.filter(isAdult);
// console.log(adults);
// function isAdult(element){
//     return element>=18;
// }



// const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
// const shortWords = words.filter(getShortWords);
// console.log(shortWords);

// function getShortWords(element){
//     return element.length <=6;
// }