let palabra = "gato";

palabra = palabra.toLowerCase();

switch (palabra) {
    case "perro":
        mensaje = "dog";
        break;
    case "gato":
        mensaje = "cat";
        break;
    case "puerta":
        mensaje = "door";
        break;
    case "ventana":
        mensaje = "window";
        break;
    case "mesa":
        mensaje = "table";
        break;
    default:
        mensaje = "La palabra ingresada es incorrecta"
        break;
}


console.log(mensaje);