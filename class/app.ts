import { Person,Product } from "./dataType";

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
[...people,...products].forEach(item=>console.log(`Item : ${item.name}`));

class PeopleCollection{
    private items: Person[] = [];

    constructor(initialItems: Person[]){
        this.items.push(...initialItems);
    }

    add(newItem: Person){
        this.items.push(newItem);
    }
    getNames(): string[]{
        return this.items.map(item=>item.name);
    }
    getItem(index:number):Person{
        return this.items[index];
    }
}
let peoples = new PeopleCollection(people);
console.log(`Names: ${peoples.getNames().join(', ')}`);
let firstPerson = peoples.getItem(0);
console.log(`Fist Person: ${firstPerson.name}, ${firstPerson.city}`);
