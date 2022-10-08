const a = 0;
const F = 0;

let S = 0;
let t = 0;
let v = 0;
let x = 0;

// Functions

function getV(S, t){
    return S/t;
}

function getT(S, v){
    return S/v
}

function getS(v, t){
    return v*t;
}

let quantities = { S, t, v, x };
let functions = { getV, getT, getS }

module.exports = { quantities, functions }