"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
[...people, ...products].forEach(item => console.log(`Item : ${item.name}`));
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
}
let peoples = new GeneralCollection(people);
console.log(`Names: ${peoples.getNames().join(', ')}`);
let firstPerson = peoples.getItem(0);
if (firstPerson instanceof dataType_1.Person)
    console.log(`Fist Person: ${firstPerson.name}, ${firstPerson.city}`);
let items = new GeneralCollection(products);
let firstProduct = items.getItem(0);
console.log(`Product Names: ${items.getNames().join(', ')}`);
if (firstProduct instanceof dataType_1.Product)
    console.log(`Fist Product: ${firstProduct.name}, ${firstProduct.price}`);
