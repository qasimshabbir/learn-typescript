export {};//avoid redeclaration issue.

type calc = (left:number|number[],right:number|number[])=>number;
let calculator:(calc)[]=[];
let add:calc=(left,right)=>{
    if(Array.isArray(left) && Array.isArray(right)){
        if(left.length !== right.length){
            return 0;
        }
       let result=0;        
       for(let i=0;i<left.length;i++){
            result+= add(left[i],right[i]);
       } 
       return result;
    }else if(typeof left === 'number' && typeof right === 'number'){
        return left + right;
    }
    return 0;
}
let sub:calc=(left,right)=>{
    if(Array.isArray(left) && Array.isArray(right)){
        if(left.length !== right.length){
            return 0;
        }
       let result=0;        
       for(let i=0;i<left.length;i++){
            result+= sub(left[i],right[i]);
       } 
       return result;
    }else if(typeof left === 'number' && typeof right === 'number'){
        return left - right;
    }
    return 0;
}
let mul:calc=(left,right)=>{
    if(Array.isArray(left) && Array.isArray(right)){
        if(left.length !== right.length){
            return 0;
        }
       let result=0;        
       for(let i=0;i<left.length;i++){
            result+= mul(left[i],right[i]);
       } 
       return result;
    }else if(typeof left === 'number' && typeof right === 'number'){
        return left * right;
    }
    return 0;

}
let div:calc=(left,right)=>{
    if(Array.isArray(left) && Array.isArray(right)){
        if(left.length !== right.length){
            return 0;
        }
       let result=0;        
       for(let i=0;i<left.length;i++){
            result+= div(left[i],right[i]);
       } 
       return result;
    }else if(typeof left === 'number' && typeof right === 'number'){
        return left / right;
    }
    return 0;

}

calculator.push(add);
calculator.push(sub);
calculator.push(mul);
calculator.push(div);
const lft = [20,30,40,50];
const rht = [40,24,50,80];
calculator.forEach(item=>console.log(item(lft,rht)));

const arrStringDate: (string|Date)[]=[];
arrStringDate.push("numberOne");
arrStringDate.push(new Date());
const aString = arrStringDate[0].toString();
const bString = arrStringDate[2222].toString();//this will throw runtime error.
console.log(aString.length,bString.length);
