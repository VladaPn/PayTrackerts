"use strict";
console.log('test');
let greet;
greet = () => {
    console.log("Hello from func");
};
//greet = "hello"
const add = (a, b, c) => {
    console.log(a + b);
};
add(10, 15);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
const logDetail = (uid, item) => {
    console.log(`${item} has uid of ${uid}`);
};
const greet2 = (user) => {
    console.log(`${user.name} has ${user.uid}`);
};
let calc;
calc = (numOne, numTwo, operation) => {
    if (operation === "add") {
        return numOne + numTwo;
    }
    else if (operation === "diff") {
        return numOne - numTwo;
    }
    else {
        return numOne * numTwo;
    }
};
