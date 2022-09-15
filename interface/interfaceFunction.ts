export {};
interface INumbers{
    left:number;
    right:number;
    operator?: string;
    readonly noOfParams:2;
    add(a:number,b:number,op?:string):[string,number];//Method
    subtract?: (a:number,b:number,op?:string)=>[string,number]; //Property
}

const Calc:INumbers = {
    left: 30,
    right:40,
    noOfParams:2,
    add(a,b,op='add'){
        return [op,a+b];
    },
    subtract: (a,b,op='subtract')=>{
        return [op,a-b];
    }
}
console.log(Calc.add(Calc.left,Calc.right));
Calc.operator='add';
if(Calc.subtract!==undefined){
    console.log(Calc.subtract(Calc.left,Calc.right));
}