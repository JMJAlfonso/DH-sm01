function alquilerVehiculo (tipoVehiculo, diasA, sillaBebe){
    let tarifa = 0;
    switch (tipoVehiculo){
        case "Compacto" :
            tarifa += 14000;
            break;
        case "Mediano":
            tarifa += 17000;
            break;
        case "Camioneta":
            tarifa += 28000;
        default :
            console.log("Ha ingresado un vehiculo incorrecto.");
            break;
    }
    if (sillaBebe){
        return (tarifa + 1200)*diasA;
    }
    return tarifa * diasA;
}
let tipoVehiculo = "Compacto";
let diasA = 10;
let tarifaTotal=alquilerVehiculo(tipoVehiculo, diasA, true);

console.log("Estimado cliente: en base al tipo de vehículo"+ " " + tipoVehiculo+ " " + "alquilado, considerando los" + " " +diasA+ " " +  "días utilizados el monto total a pagar es de:" + " " + "$" + tarifaTotal);
