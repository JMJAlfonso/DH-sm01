let fs = require('fs');

function importar (marca){
    let archivo = ""
switch(marca){    
    case "Hot Toys":
        archivo = "figuras1.json";
        break;
    case "Bandai":
        archivo = "figuras2.json";
        break;
    case "Star Wars":
        archivo = "figuras2.json"; 
        break;
    default :
        console.log("Archivo no encontrado");       
        break;
}

const figuritasFile = fs.readFileSync(__dirname + '/datos/' + archivo, 'utf-8');
const figuritas = JSON.parse(figuritasFile);
return figuritas;
}
module.exports = importar; 