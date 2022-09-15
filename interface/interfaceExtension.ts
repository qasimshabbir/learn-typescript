interface add{
    add(a:number,b:number):number;
}
interface subtract extends add{
    subtract(a:number,b:number):number;
}

interface multiply extends subtract{
    multiply(a:number,b:number):number;
}
interface divide extends multiply{
    divide(a:number,b:number):number;
}


interface Calculator extends divide{
    calculate():void
}

const AddSub:subtract = {
   add(a, b) {
       return a+b;
   }, 
   subtract(a, b) {
       return a+b;
   },
}

const Calc:Calculator = {
    add(a, b) {
        return a+b;
    },
    subtract(a, b) {
        return a-b;
    },
    multiply(a,b){
        return a*b;
    },
    divide(a, b) {
        return a/b;
    },
    calculate() {
        console.log(this.add(20,40));
        console.log(this.subtract(20,40));
        console.log(this.multiply(20,40));
        console.log(this.divide(20,40));
    },
}
Calc.calculate();