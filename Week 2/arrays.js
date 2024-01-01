/**
 * Arrays common methods
 * push
 * pop
 * shift
 * unshift
 * slice
 * splice
 * forEach
 * map
 * filter
 * reduce
 * find
 * includes
 * sort
 * join
 */
{
    const fruits = ["apple", "banana"];
    fruits.push("orange"); // ["apple", "banana", "orange"]
    fruits.push("tmp1", "tmp2");
    // console.log(fruits);
}

{
    const numbers = [1, 2, 3, "Okba"];
    const lastNumber = numbers.pop(); // 3
    // console.log(lastNumber);
    // console.log("-------------");
}

{
    const names = ["Alice", "Bob", "Charlie"];
    const first = names.shift(); // "Alice"
    // console.log(first);
    // console.log(names);
    // console.log("-------------");
}

{
    const ages = [30, 40, 50];
    ages.unshift(20); // [20, 30, 40, 50]
    // console.log(ages);
    // console.log("-------------");
}

{
    const animals = ["dog", "cat", "rabbit", "hamster"];
    const pets = animals.slice(1, 3); // ["cat", "rabbit"]
    // console.log(pets);
    // console.log(animals);
    // console.log("-------------");
}

{
    const months = ["Jan", "March", "April"];
    months.splice(1, 2, "test"); // ["Jan", "Feb", "March", "April"]
    // console.log(months);
    // console.log("-------------");
}

{
    const numbers = [1, 2, 3];
    numbers.forEach((number) => {
        // console.log(number * 2)
    });

    let tmpArr = [];

    numbers.forEach(function (num) {
        tmpArr.push(num * 2);
    });

    console.log(tmpArr);

    const myForEach = (arr, callback) => {
        for (let i = 0; i < arr.length; i++) {
            callback(arr[i]);
        }
    };

    myForEach(numbers, function (num) {
        // console.log(num * 4);
    });
}

{
    let arr = [1, 2, 3, 4];
    const squares = arr.map((x) => x * x); // [1, 4, 9, 16]
    // console.log(squares);
}

{
    let arr = [1, 2, 3, 4, 5, 6];
    const evens = arr.filter(function (n) {
        return n % 2 === 0;
    }); // [2, 4, 6]
    console.log(evens);
}

{
    // sum of elements
    const sum = [1, 2, 3, 4].reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    ); // 10

    // Counting Instances
    const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
    const tally = fruits.reduce((acc, fruit) => {
        acc[fruit] = (acc[fruit] || 0) + 1;
        return acc;
    }, {});

    console.log(tally);
    /**
     * {
     *  "apple" : 3,
     * "banana" : 2,
     * "orange" : 1
     * }
     */

    // Finding the Maximum Value in an Array
    const values = [10, 5, 100, 2, 1000];
    const maxValue = values.reduce(
        (max, value) => (value > max ? value : max),
        values[0]
    );

    // String Concatenation
    const words = ["This", "is", "a", "sentence."];
    const sentence = words.reduce((acc, word) => acc + " " + word);
    console.log(sentence); // "This is a sentence."
}

{
    const found = [5, 12, 8, 130, 44].find((element) => element > 10); // 12

    const students = [
        { name: "stud1", age: 10 },
        { name: "stud2", age: 12 },
        { name: "stud3", age: 7 },
        { name: "stud4", age: 8 },
        { name: "stud5", age: 9 },
    ];

    const student = students.find((element) => element.name == "stud3");

    console.log(student);
}

{
    const array = [1, 2, 3];
    const includesTwo = array.includes(2); // true

    const allowedRoles = ["admin", "teacher", "manager"];

    const user = {
        name: "Okba CEMUZ",
        role: "student",
    };

    if (allowedRoles.includes(user.role)) {
        console.log(user.name + " " + "is allowed to pass");
    }
}

{
    const months = ["March", "Jan", "Feb", "Dec"];
    months.sort(); // ["Dec", "Feb", "Jan", "March"]

    const numberArray = [40, 1, 5, 200];
    function compareNumbers(a, b) {
        return a - b;
    }

    numberArray.sort(compareNumbers); // [1, 5, 40, 200]

    /**
     * compareFn(a, b) return value	sort order
    > 0	sort a after b, e.g. [b, a]
    < 0	sort a before b, e.g. [a, b]
    === 0	keep original order of a and b
     */
}

{
    const elements = ["Fire", "Air", "Water"];
    const joined = elements.join(); // "Fire,Air,Water"
    const joined2 = elements.join(" | ");
    console.log(joined);
    console.log(joined2);
}

/**
 * Exercise: Student Grades Analysis
 * Calculate Average Grade for Each Student
 * Find Students with Average Grade Above 85
 * Calculate the Class Average
 * List of Names of Students
 * Find the Highest Average Grade
 */

const students = [
    { name: "Alice", grades: [88, 90, 92] }, // average : 80
    { name: "Bob", grades: [82, 85, 87] }, // average : 85
    { name: "Charlie", grades: [80, 85, 90] }, // average : 90
    { name: "Diana", grades: [90, 92, 94] }, // average : 100
];
