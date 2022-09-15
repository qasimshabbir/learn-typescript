interface Calculate{
    left:number;
};

interface Calculate{
    right:number;
}

interface Calculate{
    add:()=>number;
}

interface Calculate{
    subtract:()=>number;
}
let left = 30;
let right = 34;
let Calculator: Calculate = {
    left:20,
    right:30,
    add() {
        return this.left+this.right;
    },
    subtract() {
        return this.left-this.right;
    },
}
console.log(Calculator.add());
console.log(Calculator.subtract());