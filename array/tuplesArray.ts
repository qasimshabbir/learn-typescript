export {};
const add = (param:[number,number])=>{
    return ['add',param[0]+param[1]] as const;
}
const addOld = (left:number,right:number) =>{
    return ['addOld',left+right] as const;
}

let params:[number,number][]=[];
params=[
    [20,30],
    [40,40],
    [40,20],
    [40,22]
]

params.forEach(item => console.log(add(item)));

params.forEach(item => console.log(addOld(...item)));
    
