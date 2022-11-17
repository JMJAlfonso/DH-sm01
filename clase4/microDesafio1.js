let Perfil = "aSistente" ;

let perfil = Perfil.toUpperCase();

switch(perfil){
    case ' ':
        console.log("Debe especificar el perfil del usuario");
        break;
    case "ADMINISTRADOR":
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;
    case "ASISTENTE":
        console.log("Usted solo tiene permisos de registrar, modificar y consultar datos");  
        break;  
    case "INVITADO":
        console.log("Usted solo tiene permisos de consultar datos");
        break;
    default:
        console.log("Debe especificar un perfil valido");            
}