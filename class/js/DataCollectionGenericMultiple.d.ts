import { Person, City } from "./dataType";
declare class GeneralCollection<T extends {
    name: string;
}, U> {
    private items;
    constructor(initialItems: T[]);
    add(newItem: T): void;
    getNames(): string[];
    getItem(index: number): T;
    collate(targetData: U[], itemProp: string, targetProp: string): (T & U)[];
}
export declare let peoples: GeneralCollection<Person, City>;
export declare let collateData: (Person & City)[];
export {};
