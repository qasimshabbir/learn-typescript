export {};
interface INumbers{
    left:number;
    right:number;
    operator?: string;
    readonly noOfParams:2;
}
let add=(a:number,b:number,op:string='')=>{
    return ['',a+b];
};

const calculator:INumbers = {
    left:20,
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
console.log(add(calculator.left,calculator.right,calculator.operator));