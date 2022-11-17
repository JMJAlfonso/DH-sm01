function stringAmayuscula(string){

    return string.toUpperCase();

}

function tipoDeDato(dato){

    return typeof(dato);
}

function aniosPerro(edad){
    
    return edad * 7;
}

function valorHoraTrabajo(salarioMensual,cantDiasT,cantHorasDia){
    let valorHora = salarioMensual/(cantDiasT*cantHorasDia);

    return valorHora;
}


console.log("Hora de trabajo es = $" + valorHoraTrabajo(2500, 20, 8));

console.log("La edad del perro es de " + aniosPerro(8) + "anios");

console.log("La palabra minuscula es  'jesus es amor' y en mayuscula es " + stringAmayuscula("jesus es amor"));

console.log("El dato pasado es de tipo  " + tipoDeDato("hola"));
