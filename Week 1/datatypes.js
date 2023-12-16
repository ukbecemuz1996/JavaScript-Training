// primitive data types

// null
let nullVar = null;

// undefined
let undefinedVar;

// boolean
let boolVar = true;

boolVar = false;

// number
let numVar = 1234;
numVar = 12.34;

// NaN
// indicates an invalid number
let NaNVal = "a" / 4;

// string
let stringVal = "stringVal";
stringVal = "stringVal";

// symbol
let id1 = Symbol("id");
let id2 = Symbol("id");

// console.log(id1 == id2);

let id3 = Symbol.for("id");
let id4 = Symbol.for("id");

// console.log(id3 == id4);

// arrays
let arr1 = [1, "2", 3, id4];
let arr2 = new Array(1, "2", 3, id4);

// console.log(arr1);
// console.log(arr2);

// object
let student = {
    [id1]: 1234,
    name: "Ahmad Mohammed",
    age: 22,
    hobbies: ["reading", "swimming", "football", "programming"],
    "Spaced Property": "Spaced Value",
    1234: 50,
};

// console.log(student[id1]);
// console.log(student.name);
// console.log(student.age);
// console.log(student.hobbies);
// console.log(student["Spaced Property"]);
// console.log(student[1234]);

// Symbols prevents the object property name collision
let states = {
    OPEN: Symbol("Open"),
    IN_PROGRESS: Symbol("In progress"),
    COMPLETED: Symbol("Completed"),
    HOLD: Symbol("On hold"),
    CANCELED: Symbol("Canceled"),
};

let state = Symbol("status");

let task = {
    [state]: states.OPEN,
    description: "Learn JavaScript",
    setStatus(s) {
        this[state] = s;
    },
};

// console.log(task[state]);
// task.setStatus(states.HOLD);
// console.log(task[state]);
