// falsy values

if (false) {
    console.log("false");
} // Will not execute because false is falsy
if (0) {
    console.log(0);
} // Will not execute because 0 is falsy
if ("") {
    console.log("");
} // Will not execute because "" is falsy
if (null) {
    console.log(null);
} // Will not execute because null is falsy
if (undefined) {
    console.log(undefined);
} // Will not execute because undefined is falsy
if (NaN) {
    console.log(NaN);
} // Will not execute because NaN is falsy

// truthy values
if ({}) {
    console.log("empty object");
}

if (" ") {
    console.log("empty string with space");
}

if (-1) {
    console.log("negative number");
}
