/**
 * Object Literal
 * Factory Functions
 * Contstructor Functions
 * Prototype Chain
 */

// Object Literal
{
    let myCar = {
        make: "Honda",
        model: "Civic",
        stopped: true,
        start() {
            this.stopped = false;
            console.log("car is started!");
        },
        stop: function () {
            this.stopped = true;
            console.log("car is stopped!");
        },
    };

    myCar.toggleRunning = function () {
        this.stopped = !this.stopped;
    };
    console.log(myCar);

    myCar.start();

    console.log(myCar);

    myCar.stop();

    console.log(myCar);

    console.log("---------");
}

{
    // instance [Object]
    let ahmed = {
        name: "Ahmad Ahmad",
        age: 16,
        sayHello() {
            console.log("Hello");
        },
    };

    let mohammed = {
        name: "Mohammed Mohammed",
        age: 18,
        sayHello() {
            console.log("Hello");
        },
    };
}

// Factory Functions
{
    function Car(make, model) {
        const obj = {
            make: make,
            model: model,
        };
        return obj;
    }

    function Student(name, age) {
        return {
            name: name,
            age: age,
            sayMyName() {
                console.log(this.name);
            },
        };
    }

    let myCar = Car("Honda", "Civic");

    let ahmed = Student("Ahmad Ahmad", 18);

    ahmed.sayMyName();

    console.log("------------");

    // console.log(myCar);
}

// Constructor Function
{
    function Car(make, model) {
        // const object = {}

        // object.make = make;
        this.make = make;

        // object.model = model;
        this.model = model;

        // object.stopped = true;
        this.stopped = true;

        // return object;
    }

    Car.prototype.start = function () {
        this.stopped = false;
        console.log("car is started!");
    };

    Car.prototype.stop = function () {
        this.stopped = true;
        console.log("car is stopped!");
    };

    console.log("------- Constructor Function -----------");

    let myCar = new Car("Honda", "Civic");

    console.log(myCar);
    myCar.start();
    console.log(myCar);

    console.log("------- Constructor Function -----------");
}

// Class Syntax
{
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this.stopped = true;
        }

        start() {
            this.stopped = false;
            console.log("car is started!");
        }

        stop() {
            this.stopped = true;
            console.log("car is stopped!");
        }
    }

    let myCar = new Car("Ford", "Mustang");
    console.log(myCar);
}

// Prototype Chain
{
    class Person {
        constructor(name) {
            this.name = name;
        }

        greet() {
            console.log(`Hello ${this.name}`);
        }
    }

    class Student extends Person {
        constructor(name, grade) {
            super(name);
            this.grade = grade;
        }
    }

    let student1 = new Student("Jack");
    student1.greet();
}

// different example
{
    let obj1 = {
        prop1: "prop1",
        prop2: "prop2",
        func1: function () {
            console.log(this.prop1 + " " + this.prop2);
        },
    };

    let obj2 = {};
    obj2.__proto__ = obj1; // [[Prototype]]
    // obj2 = Object.create(obj1)

    // console.log(obj2.prop1);
}

// inhertamce
{
    class Human {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        introduce() {
            console.log(
                `Hello, my name is ${this.name} and I am ${this.age} years old.`
            );
        }
    }

    class Student extends Human {
        constructor(name, age, studentID, major) {
            super(name, age);
            this.studentID = studentID;
            this.major = major;
        }

        study() {
            console.log(`${this.name} is studying ${this.major}.`);
        }
    }

    class Teacher extends Human {
        constructor(name, age, employeeID, subject) {
            super(name, age);
            this.employeeID = employeeID;
            this.subject = subject;
        }

        teach() {
            console.log(`${this.name} is teaching ${this.subject}.`);
        }
    }

    class School {
        constructor(name) {
            this.name = name;
            this.students = [];
            this.teachers = [];
        }

        enrollStudent(student) {
            if (student instanceof Student) {
                this.students.push(student);
                console.log(
                    `${student.name} has been enrolled in ${this.name}.`
                );
            }
        }

        hireTeacher(teacher) {
            if (teacher instanceof Teacher) {
                this.teachers.push(teacher);
                console.log(
                    `${teacher.name} has been hired to teach at ${this.name}.`
                );
            }
        }

        displayInfo() {
            console.log(`School Name: ${this.name}`);
            console.log("Students:");
            this.students.forEach((s) =>
                console.log(
                    ` - ${s.name}, ID: ${s.studentID}, Major: ${s.major}`
                )
            );
            console.log("Teachers:");
            this.teachers.forEach((t) =>
                console.log(
                    ` - ${t.name}, ID: ${t.employeeID}, Subject: ${t.subject}`
                )
            );
        }
    }

    let school = new School("Greenwood High");

    let student1 = new Student("Alice", 20, "S1001", "Computer Science");
    let student2 = new Student("Bob", 22, "S1002", "Mathematics");

    let teacher1 = new Teacher("Dr. Smith", 45, "T2001", "Physics");
    let teacher2 = new Teacher("Ms. Johnson", 38, "T2002", "English");

    console.log('------------------');
    
    school.enrollStudent(student1);
    school.enrollStudent(student2);

    school.hireTeacher(teacher1);
    school.hireTeacher(teacher2);

    school.displayInfo();

    student1.study();
    teacher1.teach();
}

// accessories (setter and getters)
// static
{
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }

        // Getter for name
        get name() {
            return this._name;
        }

        // Setter for name
        set name(newName) {
            if (newName && newName.length > 0) {
                this._name = newName;
            } else {
                console.log("Invalid name");
            }
        }

        // Getter for age
        get age() {
            return this._age;
        }

        // Setter for age
        set age(newAge) {
            if (newAge > 0 && newAge < 150) {
                this._age = newAge;
            } else {
                console.log("Invalid age");
            }
        }

        // Static method
        static greet() {
            console.log("Hello there!");
        }
    }

    // Using the class
    let person1 = new Person("Alice", 30);

    // Accessing properties using getters
    // console.log(person1.name); // Outputs: Alice
    // console.log(person1.age); // Outputs: 30

    // Modifying properties using setters
    person1.name = "Bob";
    person1.age = 35;

    // console.log(person1.name); // Outputs: Bob
    // console.log(person1);
}

// private and setters, getters
{
    class BankAccount {
        // Private fields
        #accountNumber;
        #balance;

        constructor(accountNumber, initialBalance) {
            this.#accountNumber = accountNumber;
            this.#balance = initialBalance;
        }

        // Getter for balance
        get balance() {
            return this.#balance;
        }

        // Method to deposit money
        deposit(amount) {
            if (amount > 0) {
                this.#balance += amount;
                console.log(
                    `Deposited $${amount}. New balance is $${this.#balance}.`
                );
            } else {
                console.log("Invalid deposit amount");
            }
        }

        // Method to withdraw money
        withdraw(amount) {
            if (amount > 0 && amount <= this.#balance) {
                this.#balance -= amount;
                console.log(
                    `Withdrew $${amount}. Remaining balance is $${
                        this.#balance
                    }.`
                );
            } else {
                console.log("Invalid withdrawal amount");
            }
        }

        // Static method to validate account number format (simple example)
        static isValidAccountNumber(accountNumber) {
            return /^\d{10}$/.test(accountNumber); // Checks if account number is exactly 10 digits
        }
    }

    // Using the class
    let myAccount = new BankAccount("1234567890", 1000);

    // Accessing the balance using a getter
    // console.log(`Initial balance: $${myAccount.balance}`); // Outputs: Initial balance: $1000

    // Depositing money
    myAccount.deposit(500);

    // Withdrawing money
    myAccount.withdraw(200);

    // Checking the balance
    // console.log(`Final balance: $${myAccount.balance}`); // Outputs: Final balance: $1300

    // Using the static method
    let isValid = BankAccount.isValidAccountNumber("1234567890");
    // console.log(`Is valid account number: ${isValid}`); // Outputs: Is valid account number: true
}
