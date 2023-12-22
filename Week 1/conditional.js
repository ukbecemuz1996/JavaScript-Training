// if else if else
const temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside!");
} else if (temperature > 20) {
    console.log("It's a pleasant day.");
} else {
    console.log("It's a bit chilly.");
}

const dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the workweek.");
        break;
    case "Friday":
        console.log("It's almost the weekend!");
        break;
    default:
        console.log("It's a regular day.");
}

// ternary operator
// simple
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote);

//nested
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
/**
 * equivalent to 
 * if (score >= 90) {
    grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else {
        grade = 'D';
    }
 */
console.log(grade);
