import Lowdb from "lowdb";

function show<T>(input:T){
    return input
}
let a:number = show(23);
let b:string = show("23");
let c:boolean = show(true);

function logWrapper<Input>(callback:(input:Input)=>void){
    return (input: Input)=>{
        console.log("Input: ",input);
        callback(input);
    }
}

logWrapper((input: string)=>{
    console.log(input.length);
})
logWrapper<string>((input)=>{
    console.log(input.length);
})

function makeType<First,Second>(a:First,b:Second){
    return console.log(`${a} is also ${b}`);
}
makeType("a","b");
makeType(23,234);
makeType(true,234);
makeType("22",234); 
