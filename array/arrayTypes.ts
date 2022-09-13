const arrayOfNos:number[]= [2,50,51];
arrayOfNos.push(454);
arrayOfNos.push(234.2342);
console.log(arrayOfNos);

//you can also define array type in generics
const arrayOfNos1:Array<number> = [54,54];
const arrayOfNos2 = <number[]>[54,54];

//define by function type
let createStrings:()=>string[]; //function returning array
let logString:(index:number)=>string; //function type
let stackOfLogStringCallbacks: ((index:number)=>string)[]=[]; //array of function type

createStrings = ()=>{
    return ['first','second','third']
}

logString = (index)=>{
    return createStrings()[index];
}
//initializing stackOfLogString
createStrings().forEach((item)=>stackOfLogStringCallbacks.push(logString));

//executing each logString from stack
stackOfLogStringCallbacks.forEach((item,index)=>console.log(item(index)));
