// Variables Hoisting

/**
 * var myVar;
 * var helloFunc;
 * function hello() {
    console.log("Hello, world!");
}
 */

console.log(myVar); // undefined, not ReferenceError
var myVar = 5;

// console.log(myLet); // ReferenceError
let myLet = 5;

// Functions Hoisting


// function declaration
hello(); // "Hello, world!"
function hello() {
    console.log("Hello, world!");
}

// function expression
console.log(helloFunc); // TypeError: helloFunc is not a function
 // TypeError: helloFunc is not a function
var helloFunc = function () {
    console.log("Hello, world!");
};
console.log(helloFunc());

const func = () => {
    
}
/**
 * أفضل الممارسات
 * أعلن عن المتغيرات في الأعلى
 * function expression > function declaration
 * Use let and const 
 */