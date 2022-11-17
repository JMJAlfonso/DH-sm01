let electrodomesticos = ["heladera","cocina","lavarropas","lavaplatos","microondas","tostadora"];

function obtenerNumeroAleat(max){
    return Math.floor(Math.random() *max);
}

let numeroAleat = obtenerNumeroAleat(electrodomesticos.length);
//console.log(electrodomesticos[numeroAleat]);

let primerElem = electrodomesticos.shift();
electrodomesticos.push(primerElem);
//console.log(electrodomesticos);
electrodomesticos.push("freidora","coinor");
//console.log(electrodomesticos);
//console.log(electrodomesticos.length);

/*if (electrodomesticos.indexOf("papa") !=-1)
    console.log('Producto encontrado');

else if(electrodomesticos.indexOf("papa")==-1)
    console.log('Producto buscado no existe'); */


let unidos = electrodomesticos.join(" ");
   
//console.log(unidos);
//console.log(unidos.length);
unidos = unidos.replace("heladera","licuadora");

//console.log(unidos);

let arreglo = unidos.split(" ");

console.log(arreglo);