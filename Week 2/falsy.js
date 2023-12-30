// falsy values

if (false) {
    console.log("false");
} // Will not execute because false is falsy
if (0) {
    console.log(0);
} // Will not execute because 0 is falsy
if ("") {
    console.log("");
} // Will not execute because "" is falsy
if (null) {
    console.log(null);
} // Will not execute because null is falsy
if (undefined) {
    console.log(undefined);
} // Will not execute because undefined is falsy
if (NaN) {
    console.log(NaN);
} // Will not execute because NaN is falsy

// truthy values
if ({}) {
    // console.log("empty object");
}

if (" ") {
    // console.log("empty string with space");
}

if (-1) {
    // console.log("negative number");
}

if ([]) {
    console.log("empty array");
}

let student = {
    name: "",
    age: 0,
    education: null,
    educations: [],
};

if (!student.name) {
    console.log("Student does not have a name");
}

if (!student.age) {
    console.log("Student age is not set");
}

if (!student.education) {
    console.log("Student does not have an education");
}

if (!student.degree) {
    console.log("Student degree does not have a degree");
}

if (student.degree) {
    console.log("Student degree is: " + student.degree);
}

if(!student.educations.length) {
    console.log("Student does not have any education");
}