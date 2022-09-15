interface Calculate{
    left:number;
};

interface Calculate{
    right:number;
}

interface Calculate{
    add:(a:number,b:number)=>number;
}

interface Calculate{
    subtract:(a:number,b:number)=>number;
}

let Calculator: Calculate = {
    left:20,
    right:30,
    add(a, b) {
        return a+b;
    },
    subtract(a, b) {
        return a-b;
    },
}
Calculator.add(Calculator.left, Calculator.right);