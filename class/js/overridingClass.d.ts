declare class Parent {
    greet(msg: string, greet: string): void;
}
declare class Child extends Parent {
    greet(msg: string): void;
}
declare class GrandChild extends Parent {
    greet(msg: string): boolean;
}
declare let greet: boolean;
