"use strict";
const AddSub = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a + b;
    },
};
const Calc = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    },
    calculate() {
        console.log(this.add(20, 40));
        console.log(this.subtract(20, 40));
        console.log(this.multiply(20, 40));
        console.log(this.divide(20, 40));
    },
};
Calc.calculate();
