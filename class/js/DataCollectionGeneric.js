"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { Person,Product } from "./dataType";
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
//class GeneralCollection<T>{
//class GeneralCollection<T extends Person|Product>{
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
let firstPerson = peoples.getItem(0);
console.log(`Person Names: ${peoples.getNames().join(', ')}`);
console.log(`Fist Person: ${firstPerson.name}, ${firstPerson.city}`);
let items = new GeneralCollection(products);
let firstItem = items.getItem(0);
console.log(`Product Names: ${items.getNames().join(', ')}`);
console.log(`Fist Product: ${firstItem.name}, ${firstItem.price}`);
let items1 = new GeneralCollection(Cities);
let firstItem1 = items1.getItem(0);
console.log(`Product Names: ${items1.getNames().join(', ')}`);
console.log(`Fist Product: ${firstItem1.name}, ${firstItem1.population}`);
