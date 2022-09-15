"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let add = (a, b, op = '') => {
    return ['', a + b];
};
const calculator = {
    left: 20,
    right: 40,
    noOfParams: 2,
};
console.log(calculator.noOfParams);
calculator.left = 50;
calculator.right = 60;
console.log(add(calculator.left, calculator.right));
calculator.left = 70;
calculator.right = 90;
calculator.operator = "add";
console.log(add(calculator.left, calculator.right, calculator.operator));
