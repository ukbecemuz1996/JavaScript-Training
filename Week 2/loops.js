// for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration " + i);
}

console.log("end of for loop");

// while loop
let count = 0;
while (count < 5) {
    console.log("Iteration " + count);
    count++;
}

console.log("end of while loop");

// do while loop
let count2 = 0;
do {
    console.log("Iteration " + count2);
    count2++;
} while (count2 < 5);

console.log("end of do-while loop");

// for..in for objects
const person = {
    name: "Alice",
    age: 30,
    job: "Engineer",
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

console.log("end of for..in loop");

const student = {
    "First Name": "Okba",
    "Last Name": "CEMUZ",
    Age: 28,
};

for (let k in student) {
    console.log(`${k}: ${student[k]}`);
}

// for..of for arrays
const colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color);
}
console.log("end of for..of loop");

const students = [
    {
        "First Name": "Okba",
        "Last Name": "CEMUZ",
        Age: 28,
    },
    {
        "First Name": "Ahmad",
        "Last Name": "Mohammed",
        Age: 28,
    },
    {
        "First Name": "Majid",
        "Last Name": "Mosa",
        Age: 28,
    },
];

for (let student of students) {
    for (let k in student) {
        console.log(`${k}: ${student[k]}`);
    }
    console.log("-------");
}

for (let i = 0; i < students.length; i++) {
    let keys = Object.keys(students[i]);
    for (let j = 0; j < keys.length; j++) {
        console.log(`${keys[j]}: ${students[i][keys[j]]}`);
    }
    console.log("-------");
}
