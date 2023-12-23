// using backticks
const greeting = `Hello, world!`;

// Multi-line Strings

const multiLineString = `This is a string
that spans across
multiple lines`;

console.log(multiLineString);

// Interpolation (Expression Embedding)

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

let studentShort = `
    This a student whose name is : ${student.name}
    and his age is : ${student.age > 50 ? "Old Man" : "Young"}
    These are the hobbies that he likes: ${student.hobbies.join(", ")}
`;

console.log(studentShort);

let studentShort2 = "This a student whose name is :" + student.name + "\n";
studentShort2 += "and his age is :" + student.age + "\n";
studentShort2 +=
    "These are the hobbies that he likes" + student.hobbies.join(", ");

console.log(studentShort2);

const name = "Alice";
const message = `Hello, ${name}!`; // "Hello, Alice!"

// any valid expression
const price = 10;
const taxRate = 0.2;
const total = `Total: ${price * (1 + taxRate)}`; // "Total: 12"

// Tagged Template Literals
// can be used in styled components

function tag(strings, ...values) {
    console.log(strings); // Array of string literals
    console.log(values); // Array of evaluated expressions
    // return some manipulated string based on strings and values

    return "its done";
}

const firstName = "Bob";
const age = 25;
// const taggedResult = tag`This is ${firstName}. He is ${age} years old.`;
