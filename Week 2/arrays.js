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
}

{
    const numbers = [1, 2, 3];
    const lastNumber = numbers.pop(); // 3
}

{
    const names = ["Alice", "Bob", "Charlie"];
    const first = names.shift(); // "Alice"
}

{
    const ages = [30, 40, 50];
    ages.unshift(20); // [20, 30, 40, 50]
}

{
    const animals = ["dog", "cat", "rabbit", "hamster"];
    const pets = animals.slice(1, 3); // ["cat", "rabbit"]
}

{
    const months = ["Jan", "March", "April"];
    months.splice(1, 0, "Feb"); // ["Jan", "Feb", "March", "April"]
}

{
    const numbers = [1, 2, 3];
    numbers.forEach((number) => console.log(number * 2));
}

{
    const squares = [1, 2, 3, 4].map((x) => x * x); // [1, 4, 9, 16]
}

{
    const evens = [1, 2, 3, 4, 5, 6].filter((n) => n % 2 === 0); // [2, 4, 6]
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
}

{
    const array = [1, 2, 3];
    const includesTwo = array.includes(2); // true
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
}
