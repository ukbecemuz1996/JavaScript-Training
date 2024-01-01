// global context
// window [browser] or global [Nodejs]
function myFunction() {
    console.log(this);
}
myFunction();

// Method Calls
const myObject = {
    myMethod() {
        console.log(this);
    },
};
myObject.myMethod();

// Constructor Functions
function MyConstructor() {
    this.myProperty = "value";
}
const myInstance = new MyConstructor();
console.log(myInstance.myProperty);

// Arrow Functions

const myObject2 = {
    name: "JavaScript Object",
    regularFunction: function () {
        console.log("Regular Function:", this.name); // `this` refers to `myObject`

        const arrowFunction = () => {
            console.log("Arrow Function:", this.name); // `this` still refers to `myObject`
        };

        arrowFunction();
    },
};

myObject2.regularFunction();

/**
 * Explicit binding
 */

// call
{
    function greet() {
        console.log(`Hello, ${this.name}`);
    }
    const person = { name: "Alice" };
    greet.call(person); // Hello, Alice
}

// apply
{
    function greet(greeting) {
        console.log(`${greeting}, ${this.name}`);
    }
    const person = { name: "Bob" };
    greet.apply(person, ["Hello"]); // Hello, Bob
}

// bind
{
    function greet() {
        console.log(`Hello, ${this.name}`);
    }
    const person = { name: "Carol" };
    const boundGreet = greet.bind(person);
    boundGreet(); // Hello, Carol
}
