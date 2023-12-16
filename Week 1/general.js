// for ... in
// used with objects to iterate over enumarable properties
const person = {
    firstName: "John",
    lastName: "Doe",
    ssn: "299-24-2351",
};

for (const prop in person) {
    console.log(prop + ":" + person[prop]);
}

// for .. of
const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
    console.log(fruit);
}

// for .. of with objects
for (const prop of Object.keys(person)) {
    console.log(prop + ":" + person[prop]);
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
