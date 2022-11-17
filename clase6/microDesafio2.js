let peliculas = ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick','Elvis', 'Thor: amor y trueno'];

let mejorPeli = peliculas.pop();
let peli = mejorPeli.toUpperCase();

peliculas.unshift(peli);

//console.log(peliculas);

let cadenaTexto = "Counter-Strike NOP Vertigo Nick Avatar";

cadenaTexto = cadenaTexto.split(" ");

cadenaTexto.shift();
//console.log(cadenaTexto);

function unirPelis(cadenaTexto, peliculas){

    return cadenaTexto.concat(peliculas);
}

let todasLasPelis = unirPelis(cadenaTexto, peliculas);

console.log(todasLasPelis);