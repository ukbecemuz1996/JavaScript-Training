// -- Arithmetic Operators
let res = 0;

res = 5 + 5;
res = 20 - 4;
res = 3 * 7;
res = 36 / 12;
res = 15 % 2;
res = -15 % 2;
res = 2 ** 3;

// string concatenation
res = "20" + "25";

// -- Assignment Operators

let assignment = 0;

assignment = assignment + 2;

assignment += 2;
assignment -= 2;
assignment *= 2;
assignment /= 2;
assignment %= 2;

// -- Unary Operators

let a = 3;
let b;

b = +a;
b = -a;

// prefix increment / decrement
b = ++a;
b = --a;

// postfix increment / decrement
b = a++;
b = a--;

let x = 1;
y = x++ + --x + ++x + 1;

// console.log(x);
// console.log(y);

// Comparison Operators

let comp = 10 > 20;
comp = 10 < 20;
comp = 10 == 20;

comp = 10 == 10;
comp = 10 == "10";
comp = 10 === "10";

comp = 30 >= 30;
comp = 31 <= 30;

comp = 21 != 20;
comp = 20 != "20";
comp = 20 !== "20";

// console.log(comp);

// Logical Operators

/**
 * combine between comparisons to produce a logical expression
 */

// console.log(true && true);
// console.log(true && false);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || false);

// console.log(!true);
// console.log(!false);

const productPrice = 40;

let arrange1 = productPrice >= 30 && productPrice < 50;
let arrange2 = productPrice >= 50 && productPrice < 70;

// console.log(arrange1);
// console.log(arrange2);

// -- Nullish Coalescing

let nullish = null;

let newNullish = nullish ?? 25;

// console.log(newNullish);
