// let day = 1;

// switch(day){

//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
    
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Enter a valid number");
    
// }

let testScore = 92;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = 'S';
        break;
    case testScore >= 80:
        letterGrade = 'A';
        break;
    case testScore >= 70:
        letterGrade = 'B';
        break;
    case testScore >= 60:
        letterGrade = 'C';
        break;
    case testScore >= 50:
        letterGrade = 'D';
        break;
    case testScore >= 40:
        letterGrade = 'E';
        break;
    case testScore >= 33:
        letterGrade = 'F';
        break;
    default:
        console.log("Enter a valid score");
}

console.log(letterGrade);