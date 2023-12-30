// hoisting
console.log("add1", add1(1, 2));

function add1(a, b) {
    return a + b;
}

// anonymous functions // without names
const add2 = function (a, b) {
    return a + b;
};

// arrow function
const add3 = (a, b) => {
    return a + b;
};

const add4 = (a, b) => a + b;

// a => a * 2
const multiplyBy2 = (a) => a * 2;

console.log("add2", add2(1, 2));
console.log("add3", add3(1, 2));
console.log("add4", add4(1, 2));
console.log("multiplyBy2", multiplyBy2(2));

/**
 * functions are first-class citizens so you can :
 * 1- store them in variables
 * 2- pass them as arguments to a function
 * 3- return them from a function as values
 */

const anotherAdd2 = add2;

// console.log(anotherAdd2(4, 6));

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

const result = operate(3, (a, b) => a - b);
const result1 = operate(3, (a, b) => a * b);
const result2 = operate(3, (a, b) => a + b);

console.log(result);
console.log(result1);
console.log(result2);

{
    // console.log("----------------");

    // higher-order function
    // fn callback function
    const operate = (a, b, fn) => {
        return fn(a, b);
    };

    function add(a, b) {
        return a + b;
    }

    function sub2(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    const r1 = operate(2, 3, (a, b) => a + b);
    const r2 = operate(2, 3, (x, y) => x - y);
    const r3 = operate(2, 3, (x, y) => x * y);
    const r4 = operate(2, 3, (x, y) => x / y);

    const r5 = operate(2, 3, add);
    const r6 = operate(2, 3, sub2);
    const r7 = operate(2, 3, multiply);
    const r8 = operate(2, 3, divide);

    const r9 = operate(2, 3, function (a, b) {
        return a + b;
    });

    const r10 = operate(2, 3, (a, b) => {
        return a + b;
    });

    operate(2, 3, (a, b) => {
        console.log("a + b = ", a + b);
    });

    const operate2 = (a, b, fn) => {
        fn(a * 2, b * 2);
    };

    operate2(2, 3, (a, b) => {
        console.log("a + b = ", a + b);
    });

    // console.log(r1, r2, r3, r4);
    // console.log(r5, r6, r7, r8);
    // console.log("----------------");
}

{
    const arr = [1, 3, 5, 100, 4, 3.4, 6, 6.5, 7];

    function filterBiggerThan4(arr) {
        let tmp = [];

        for (let element of arr) {
            if (element > 4) {
                tmp.push(element);
            }
        }

        return tmp;
    }

    function filterBiggerThan5(arr) {
        let tmp = [];

        for (let element of arr) {
            if (element > 5) {
                tmp.push(element);
            }
        }

        return tmp;
    }

    function filter(arr, fn) {
        let tmp = [];

        for (let element of arr) {
            if (fn(element)) {
                tmp.push(element);
            }
        }

        return tmp;
    }

    // console.log(filterBiggerThan4(arr));
    // console.log(filterBiggerThan5(arr));
    // console.log(filter(arr, (a) => a > 4 && a < 8));
    // console.log(filter(arr, (a) => a > 5));
}

// example of filteration with higher-order functions and callbacks
{
    const filterFunc = (item) => {
        return item.name.startsWith("Eng.");
    };

    let arrOfPeople = [
        {
            name: "Eng. Ahmed",
            age: 25,
        },
        {
            name: "Dr. Mohammed",
            age: 30,
        },
        {
            name: "Eng. Samer",
            age: 32,
        },
    ];

    const filter = (arrToFilter = [], callback) => {
        let arr = [];

        for (let i = 0; i < arrToFilter.length; i++) {
            if (callback(arrToFilter[i])) {
                arr.push(arrToFilter[i]);
            }
        }

        return arr;
    };

    console.log(filter(arrOfPeople, filterFunc));
}
