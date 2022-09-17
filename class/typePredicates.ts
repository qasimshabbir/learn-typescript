interface Comedian{
    funny: boolean;
}
interface StandupComedian extends Comedian{
    routine: string;
}
function isStandupComedian(value: Comedian): value is StandupComedian{
    return 'routine' in value;
}

function workWithComedian(value: Comedian){
    if(isStandupComedian(value)){
        console.log(value.routine);
    }
    //console.log(value.routine); //error
}