"use strict";
const arrayOfNos = [2, 50, 51];
arrayOfNos.push(454);
arrayOfNos.push(234.2342);
console.log(arrayOfNos);
//you can also define array type in generics
const arrayOfNos1 = [54, 54];
const arrayOfNos2 = [54, 54];
//define by function type
let createStrings; //function returning array
let logString; //function type
let stackOfLogStringCallbacks = []; //array of function type
createStrings = () => {
    return ['first', 'second', 'third'];
};
logString = (index) => {
    return createStrings()[index];
};
//initializing stackOfLogString
createStrings().forEach((item) => stackOfLogStringCallbacks.push(logString));
//executing each logString from stack
stackOfLogStringCallbacks.forEach((item, index) => console.log(item(index)));
