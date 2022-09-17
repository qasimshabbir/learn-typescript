"use strict";
class Parent {
    greet(msg, greet) {
        console.log("Greet Parent: " + msg + " " + greet);
    }
}
class Child extends Parent {
    greet(msg) {
        super.greet(msg, 'Hello');
        console.log("Greet Child " + msg);
    }
}
class GrandChild extends Parent {
    greet(msg) {
        super.greet(msg, 'Hello');
        console.log("Greet Child " + msg);
        return true;
    }
}
let greet = new GrandChild().greet("Hey");
