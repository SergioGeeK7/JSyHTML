console.log("HOla"); // esta linea imprime HOla
/*
 Este codigo se ejecuta excelente
 */

if(3 == 2){
  console.log("Que nota!!");  
}else{
    console.log("Que mal");
}
var a = 2;
var e = a == 2 ? 7:0;
console.log(e);

console.log("Comienza el ciclo");
for(a = 0;a<7;a++){
    console.log(a);
}

switch(a) {
    case 1:
        console.log("es 1");
        break;
    case 7:
        console.log("es 7");
        break;
    case 4:
        console.log("es 4");
        break;
    default:
        break;
}

for(var i =0; i<7;i++){
    if(i==3){
       // break;
        continue;
    }
    console.log("contando" + i)
}
