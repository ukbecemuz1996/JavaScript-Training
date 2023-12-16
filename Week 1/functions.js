// hoisting
console.log("add1", add1(1, 2));

function add1(a, b) {
    return a + b;
}

const add2 = function (a, b) {
    return a + b;
};

// arrow function
const add3 = (a, b) => {
    return a + b;
};

const add4 = (a, b) => a + b;

const multiplyBy2 = (a) => a * 2;

console.log("add2", add2(1, 2));
console.log("add3", add3(1, 2));
console.log("add4", add4(1, 2));
console.log("multiplyBy2", multiplyBy2(2));

/**
 * functions are first-class citizens so you can :
 * 1- store them in variables
 * 2- pass them as arguments to a function
 * 3- return them from a function as valuess
 */

const anotherAdd2 = add2;

console.log(anotherAdd2(4, 6));

function specifyFirstNum(a) {
    // higher order functions
    return function (b, fn) {
        return fn(a, b);
    };
}

// callback function
const sub = (a, b) => a - b;

//higher-order function
const operate = specifyFirstNum(5);

const result = sub(3, (a, b) => a - b);

console.log(result);
