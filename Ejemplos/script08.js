var frutas = ["Manzana","Pera","Banano"];
frutas.shift();
console.log(frutas)
frutas.push("Naranja")
frutas.push("Naranja")
frutas.push("Naranja")
frutas.push("Naranja")
frutas.unshift("Mango")
//frutas.unshift("Mango")
console.log(frutas)
console.log(frutas.slice(1));
//document.write(frutas);


try{
    var r = 2/0;
    console.log(r)
    throw "error";
    
}catch(err){
    console.log("Controlando")
}