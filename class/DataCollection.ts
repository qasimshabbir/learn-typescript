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

type General = Person|Product;

class GeneralCollection{
    private items: General[] = [];

    constructor(initialItems: General[]){
        this.items.push(...initialItems);
    }

    add(newItem: General){
        this.items.push(newItem);
    }
    getNames(): string[]{
        return this.items.map(item=>item.name);
    }
    getItem(index:number):General{
        return this.items[index];
    }
}
let peoples = new GeneralCollection(people);
console.log(`Names: ${peoples.getNames().join(', ')}`);
let firstPerson = peoples.getItem(0);
if(firstPerson instanceof Person)
    console.log(`Fist Person: ${firstPerson.name}, ${firstPerson.city}`);
let items = new GeneralCollection(products);
let firstProduct = items.getItem(0);
console.log(`Product Names: ${items.getNames().join(', ')}`);
if(firstProduct instanceof Product)
    console.log(`Fist Product: ${firstProduct.name}, ${firstProduct.price}`);
