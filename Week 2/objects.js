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
    // console.log(myCar);
}

// Factory Functions
{
    function Car(make, model) {
        return {
            make: make,
            model: model,
        };
    }

    let myCar = Car("Honda", "Civic");

    // console.log(myCar);
}

// Constructor Function
{
    function Car(make, model) {
        this.make = make;
        this.model = model;
        this.stopped = true;
    }

    Car.prototype.start = function () {
        this.stopped = false;
        console.log("car is started!");
    };

    Car.prototype.stop = function () {
        this.stopped = true;
        console.log("car is stopped!");
    };

    let myCar = new Car("Honda", "Civic");
    // console.log(Car.prototype.constructor);
    // myCar.start();
    // console.log(myCar);
}

// Class Syntax
{
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
        }
    }

    let myCar = new Car("Ford", "Mustang");
    // console.log(myCar);
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

    class Student extends Person {}

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

    // school.enrollStudent(student1);
    // school.enrollStudent(student2);

    // school.hireTeacher(teacher1);
    // school.hireTeacher(teacher2);

    // school.displayInfo();

    // student1.study();
    // teacher1.teach();
}
