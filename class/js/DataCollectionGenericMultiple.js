"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collateData = exports.peoples = void 0;
const dataType_1 = require("./dataType");
let people = [
    new dataType_1.Person("Bob", "Karachi"),
    new dataType_1.Person("Jawed", "Karachi"),
    new dataType_1.Person("Salim", "Lahore")
];
let products = [
    new dataType_1.Product("Shoes", 3200),
    new dataType_1.Product("Baloon", 2),
    new dataType_1.Product("Socks", 20),
];
let Cities = [
    new dataType_1.City("Karachi", 3020020),
    new dataType_1.City("Lahore", 2432423423),
];
let Employees = [
    new dataType_1.Employee("Bob", "Accounts"),
    new dataType_1.Employee("Jawed", "Sales"),
    new dataType_1.Employee("Salim", "Admin")
];
class GeneralCollection {
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
    add(newItem) {
        this.items.push(newItem);
    }
    getNames() {
        return this.items.map(item => item.name);
    }
    getItem(index) {
        return this.items[index];
    }
    collate(targetData, itemProp, targetProp) {
        let results = [];
        targetData.forEach(item => {
            let match = targetData.find(d => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                results.push(Object.assign(Object.assign({}, match), item));
            }
        });
        return results;
    }
}
exports.peoples = new GeneralCollection(people);
exports.collateData = exports.peoples.collate(Cities, 'city', 'name');
exports.collateData.forEach(c => console.log(`${c.name} lives in ${c.city} with population ${c.population}`));
