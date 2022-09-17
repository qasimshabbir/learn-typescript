class Parent {
    public greet(msg:string,greet:string){
        console.log("Greet Parent: "+msg+" "+greet);
    }
}
class Child extends Parent{
    public greet(msg:string){
        super.greet(msg,'Hello');
        console.log("Greet Child "+msg)
    }
}
class GrandChild extends Parent{
    public greet(msg:string){
        super.greet(msg,'Hello');
        console.log("Greet Child "+msg)
        return true;
    }
}
let greet = new GrandChild().greet("Hey");


