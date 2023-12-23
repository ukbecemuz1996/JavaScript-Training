// primitive data types

// null
let nullVar = null;

// undefined
let undefinedVar;

// boolean
let boolVar = true;
boolVar = false;

// number

// integer
let numVar = 1234;

// float
numVar = 12.34;
numVar = 100.0;

// NaN (Not a Number)
// indicates an invalid number
let NaNVal = "a" / 4;

// string
let stringVal = "stringVal";
stringVal = "String value 2 lkjewjdlkwe";

// symbol
let id1 = Symbol("id");

let id2 = Symbol("id");

// console.log(id1 == id2);

let id3 = Symbol.for("id");
let id4 = Symbol.for("id");

// console.log(id3 == id4);

// arrays
// index
let arr1 = [1, "2", 3.5, id4, true, false];
let arr2 = new Array(1, "2", 3, id4, true, false);

let readingHobby = "Reading";
let writingHobby = "Writing";

let hobbies = ["reading", "writing"];

// console.log(arr1[5]);
// console.log(arr2);

// object
// features , methods {}
// key : value ,

let education = {
    schoolName: "Gazi University",
    startDate: "12/2/2013",
    endDate: "",
    certficatoin: "https://kerhfjkrer/test.pdf",
};

// JSON (JavaScript Object Notation)
// feature = property
let student = {
    // [id1]: 1234,
    name: "Ahmad Mohammed",
    age: 22,
    hobbies: ["reading", "swimming", "football", "programming"],
    // "Spaced Property": "Spaced Value",
    // 1234: 50,
    educations: [
        {
            schoolName: "Antakya School",
            startDate: "12/2/2013",
            endDate: "12/2/2014",
            certficatoin: "https://kerhfjkrer/test1.pdf",
        },
        {
            schoolName: "Gazi University",
            startDate: "12/2/2014",
            endDate: "",
            certficatoin: "https://kerhfjkrer/test2.pdf",
        },
    ],
};

const propertyName = "myId";

// dot notation
student.id = 1234;

// braket notation
student["id2"] = 12345;
student["id2 dewde"] = 12345;
student[propertyName] = 123456;

const myKeys = ["id", "name", "age", "hobbies"];
const myValues = [1234, "Ahmad", 29, ["1", "2", "3"]];

let student2 = {};

student2[myKeys[0]] = 1234;
student2[myKeys[1]] = "Ahmad";
student2[myKeys[2]] = 29;
student2[myKeys[3]] = ["1", "2", "3"];

delete student2.hobbies;

console.log(student2);

let person = {
    "First Name": "Mohamed",
    "Last Name": "Ahmad",
    Age: 27,
};

let person2 = {
    firstName: {
        label: "First Name",
        value: "Ahmad mohamed",
    },
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
