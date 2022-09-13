type calc = (left:number,right:number)=>number;
let calculator:(calc)[]=[];
let add:calc=(left,right)=>left+right;
let sub:calc=(left,right)=>left-right;
let mul:calc=(left,right)=>left*right;
let div:calc=(left,right)=>left/right;

calculator.push(add);
calculator.push(sub);
calculator.push(mul);
calculator.push(div);

calculator.forEach(item=>console.log(item(60,50)));

