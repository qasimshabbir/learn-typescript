interface IPerson {
    id: number;
    name:string;
    age: number;
    city:string;
}
class Person implements IPerson{
    public id:number;
    public name:string;
    public city: string;
    public age:number;
    constructor(id:number,name:string,city:string,age:number){
        this.id=id;
        this.name=name;
        this.city=city;
        this.age = age;
        
    }

}
class Employee extends Person {
    protected dept: string;
    constructor(id:number,name:string,dept:string,city:string,age:number){
        super(id,name,city,age);    
        this.dept=dept;
    }
     
    setDept(dept:string){
        this.dept= dept;
    }
    writeDept(){
        console.log(`${this.name} works in ${this.dept}`);
    }
    getName(){
        return this.name;
    }
}
class SalesEmployee extends Employee {
    constructor(id:number,name:string,city:string,age:number){
        super(id,name,'sales',city,age);
        console.log('SalesEmployee constructor');                
    }
    setDept(dept:string){
        this.dept= dept;
    }
    writeDept(){
        console.log(`${this.name} works in ${this.dept}`);
    }
    getName(){
        return this.name;
    }
}

let accEmployee:SalesEmployee = new Employee(1,'Jalal','Accounts','Karachi',23);
accEmployee.id = 50;
accEmployee.writeDept();

let salesEmployee:SalesEmployee = new SalesEmployee(1,'Jalal','Karachi',23);
salesEmployee.id = 30;
salesEmployee.writeDept();

let data: (IPerson|Employee)[] =[
    {id:2,name:'A',dept:'Sales',city:'Karachi',age:20},
    salesEmployee,
    {id:3,name:'B',dept:'Sales',city:'Karachi',age:20},
    {id:4,name:'C',dept:'Accounts',city:'Karachi',age:20},
    {id:5,name:'D',dept:'Accounts',city:'Karachi',age:20},
]
console.log("No of records: "+data.length)
data.forEach(item=>{
    if(item instanceof Employee){
        console.log(item.writeDept());
    }else{
        console.log(`${item.name} is living in ${item.city}`);
    }
})

