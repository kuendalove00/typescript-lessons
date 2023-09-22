"use strict";
//convert to more or less specific
let a = 'hello';
let b = a; //less specific 
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//Be carefull! TS see no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
20;
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#myId');
const nextImg = document.getElementById('#myId');
img.src;
myImg.src;
