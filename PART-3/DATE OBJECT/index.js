// Date objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted

// Example 1: Getting Date Components
const date = new Date(); // object creation
const year = date.getFullYear(); //2025
const month = date.getMonth(); //11
const day = date.getDate(); //16
const hour = date.getHours(); //10
const minutes = date.getMinutes(); //26
const seconds = date.getSeconds(); //55 
const dayOfWeek = date.getDay(); //tueday

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);

// Example 2: Setting Date Components
const date2 = new Date();

date2.setFullYear(2024);
date2.setMonth(0);
date2.setDate(1);
date2.setHours(2);
date2.setMinutes(3);
date2.setSeconds(3);

console.log(date2);

// Example 3: Comparing Dates
const date1 = new Date("2023-12-31");
const date3 = new Date("2023-12-30");

if(date3 > date1){
    console.log("HAPPY NEW YEAR!");
}