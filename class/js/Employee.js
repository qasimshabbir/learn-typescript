"use strict";
class Person {
    constructor(id, name, city, age) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(id, name, dept, city, age) {
        super(id, name, city, age);
        this.dept = dept;
    }
    setDept(dept) {
        this.dept = dept;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
    getName() {
        return this.name;
    }
}
class SalesEmployee extends Employee {
    constructor(id, name, city, age) {
        super(id, name, 'sales', city, age);
        console.log('SalesEmployee constructor');
    }
    setDept(dept) {
        this.dept = dept;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
    getName() {
        return this.name;
    }
}
let accEmployee = new Employee(1, 'Jalal', 'Accounts', 'Karachi', 23);
accEmployee.id = 50;
accEmployee.writeDept();
let salesEmployee = new SalesEmployee(1, 'Jalal', 'Karachi', 23);
salesEmployee.id = 30;
salesEmployee.writeDept();
let data = [
    { id: 2, name: 'A', dept: 'Sales', city: 'Karachi', age: 20 },
    salesEmployee,
    { id: 3, name: 'B', dept: 'Sales', city: 'Karachi', age: 20 },
    { id: 4, name: 'C', dept: 'Accounts', city: 'Karachi', age: 20 },
    { id: 5, name: 'D', dept: 'Accounts', city: 'Karachi', age: 20 },
];
console.log("No of records: " + data.length);
data.forEach(item => {
    if (item instanceof Employee) {
        console.log(item.writeDept());
    }
    else {
        console.log(`${item.name} is living in ${item.city}`);
    }
});
