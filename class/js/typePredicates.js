"use strict";
function isStandupComedian(value) {
    return 'routine' in value;
}
function workWithComedian(value) {
    if (isStandupComedian(value)) {
        console.log(value.routine);
    }
    //console.log(value.routine); //error
}
