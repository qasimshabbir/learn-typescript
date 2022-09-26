interface IPerson {
    id: number;
    name: string;
    age: number;
    city: string;
}
declare class Person implements IPerson {
    id: number;
    name: string;
    city: string;
    age: number;
    constructor(id: number, name: string, city: string, age: number);
}
declare class Employee extends Person {
    protected dept: string;
    constructor(id: number, name: string, dept: string, city: string, age: number);
    setDept(dept: string): void;
    writeDept(): void;
    getName(): string;
}
declare class SalesEmployee extends Employee {
    constructor(id: number, name: string, city: string, age: number);
    setDept(dept: string): void;
    writeDept(): void;
    getName(): string;
}
declare let accEmployee: SalesEmployee;
declare let salesEmployee: SalesEmployee;
declare let data: (IPerson | Employee)[];
