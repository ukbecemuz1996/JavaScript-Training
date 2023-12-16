// using backticks
const greeting = `Hello, world!`;

// Multi-line Strings

const multiLineString = `This is a string
that spans across
multiple lines`;

// Interpolation (Expression Embedding)

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
const taggedResult = tag`This is ${firstName}. He is ${age} years old.`;
