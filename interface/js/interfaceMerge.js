"use strict";
;
let left = 30;
let right = 34;
let Calculator = {
    left: 20,
    right: 30,
    add() {
        return this.left + this.right;
    },
    subtract() {
        return this.left - this.right;
    },
};
console.log(Calculator.add());
console.log(Calculator.subtract());
