"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (param) => {
    return ['add', param[0] + param[1]];
};
const addOld = (left, right) => {
    return ['addOld', left + right];
};
let params = [];
params = [
    [20, 30],
    [40, 40],
    [40, 20],
    [40, 22]
];
params.forEach(item => console.log(add(item)));
params.forEach(item => console.log(addOld(...item)));
