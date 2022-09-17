"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show(input) {
    return input;
}
let a = show(23);
let b = show("23");
let c = show(true);
function logWrapper(callback) {
    return (input) => {
        console.log("Input: ", input);
        callback(input);
    };
}
logWrapper((input) => {
    console.log(input.length);
});
logWrapper((input) => {
    console.log(input.length);
});
function makeType(a, b) {
    return console.log(`${a} is also ${b}`);
}
makeType("a", "b");
makeType(23, 234);
makeType(true, 234);
makeType("22", 234);
