import { Person,Product,City,Employee } from "./dataType";

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

let Employees = [
    new Employee("Bob","Accounts"),
    new Employee("Jawed","Sales"),
    new Employee("Salim","Admin")
]

class GeneralCollection<T extends {name:string},U>{
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
    collate(targetData:U[],itemProp:string,targetProp:string):(T&U)[]{
        let results:(T&U)[]=[];
        targetData.forEach(item=>{
            let match = targetData.find(d=>d[targetProp]===item[itemProp]);
            if(match !==undefined){
                results.push({...match,...item});
            }
        })
        return results;
    }
}
export let peoples = new GeneralCollection<Person,City>(people);
export let collateData= peoples.collate(Cities,'city','name');
collateData.forEach(c => console.log(`${c.name} lives in ${c.city} with population ${c.population}`));