"use strict";
let calculator = [];
let add = (left, right) => left + right;
let sub = (left, right) => left - right;
let mul = (left, right) => left * right;
let div = (left, right) => left / right;
calculator.push(add);
calculator.push(sub);
calculator.push(mul);
calculator.push(div);
calculator.forEach(item => console.log(item(60, 50)));