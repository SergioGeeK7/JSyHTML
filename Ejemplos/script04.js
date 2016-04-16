"use strict";

/*
var b = "";
var b = 3;
b = {};
console.log(b);
*/

var x = "5" + 2 + 3;
var x =  2 + 3 + "5" ;
var x = 2 + 3 +  Number("5") + 2 + 3;
console.log(x);

var r = "2";
var c = 2;
if(r == c){
    console.log("son iguales")
}

if(r === "2"){
    console.log("son re-iguales")
}