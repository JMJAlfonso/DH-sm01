let pagoMes = 1400;
let consumoKWH = 360;

let pagoFinal = consumoKWH > 300? pagoMes*1.2:pagoMes;

let mensaje = "Debido a que su hogar tuvo un consumo de "+ consumoKWH + 
"kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por"+ 
" mes tendrán un aumento del 20%),cumplimos con informarle que se ha ajustado el total a pagar, que será de $ " + pagoFinal

console.log(mensaje);

