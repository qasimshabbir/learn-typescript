//import { Person,Product } from "./dataType";
import { Person,Product,City } from "./dataType";

let people = [
    new Person("Bob","Karachi"),
    new Person("Jawed","Karachi"),
    new Person("Salim","Lahore")
];

let products = [
    new Product("Shoes",3200),
    new Product("Baloon",2),
    new Product("Socks",20),
];

let Cities = [
    new City("Karachi",3020020),
    new City("Lahore",2432423423),
]

//class GeneralCollection<T>{
//class GeneralCollection<T extends Person|Product>{
class GeneralCollection<T extends {name:string}>{
    private items: T[] = [];

    constructor(initialItems: T[]){
        this.items.push(...initialItems);
    }

    add(newItem: T){
        this.items.push(newItem);
    }
    getNames():string[]{
        return this.items.map(item=>item.name);
    }
    getItem(index:number):T{
        return this.items[index];
    }
}
let peoples = new GeneralCollection<Person>(people);
let firstPerson = peoples.getItem(0);
console.log(`Person Names: ${peoples.getNames().join(', ')}`);
console.log(`Fist Person: ${firstPerson.name}, ${firstPerson.city}`);
let items = new GeneralCollection<Product>(products);
let firstItem = items.getItem(0);
console.log(`Product Names: ${items.getNames().join(', ')}`);
console.log(`Fist Product: ${firstItem.name}, ${firstItem.price}`);
let items1 = new GeneralCollection<City>(Cities);
let firstItem1 = items1.getItem(0);
console.log(`Product Names: ${items1.getNames().join(', ')}`);
console.log(`Fist Product: ${firstItem1.name}, ${firstItem1.population}`);
