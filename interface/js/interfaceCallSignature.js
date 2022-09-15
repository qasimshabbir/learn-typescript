"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const add = (a, b) => a + b;
const Add = (a, b, op) => {
    if (op !== undefined)
        return [op, a + b];
    else
        return ['', a + b];
};
const calculator = {
    left: 30,
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
console.log(Add(calculator.left, calculator.right, calculator.operator));
