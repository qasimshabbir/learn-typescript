export {};
type method = (a:number,b:number)=>number;

interface INumbers{
    left:number;
    right:number;
    operator?: string;
    readonly noOfParams:2;
};
interface INumbersMethod{
    (a:number,b:number,op?:string):[string,number];
}
const add:method = (a,b)=>a+b;
const Add:INumbersMethod = (a,b,op)=>{
    if(op !==undefined)
        return [op,a+b];
    else
        return ['',a+b];    
    
}
const calculator:INumbers={
    left:30,
    right:40,
    noOfParams:2,
};

console.log(calculator.noOfParams)
calculator.left=50;
calculator.right=60;
console.log(add(calculator.left,calculator.right));
calculator.left=70;
calculator.right=90;
calculator.operator="add";
console.log(Add(calculator.left,calculator.right,calculator.operator));