// if else
let condicion = false;

if (2 < 3) {
  console.log("Condicion Verdadera");
} else {
  console.log("Condicion Falsa");
}

let numero = -3;

if (numero == 1) {
  console.log("Número uno");
} else if (numero == 2) {
  console.log("Número dos");
} else if (numero == 3) {
  console.log("Número tres");
} else if (numero == 4) {
  console.log("Número cuatro");
} else if (numero == 5) {
  console.log("Número cinco");
} else {
  console.log("Número desconocido");
}

// Ejecicio:
let mes = 11;
let estacion = "";

if (mes == 12 || mes == 1 || mes == 2) {
  estacion = "Invierno";
} else if (mes == 3 || mes == 4 || mes == 5) {
  estacion = "Primavera";
} else if (mes == 6 || mes == 7 || mes == 8) {
  estacion = "Verano";
} else if (mes == 9 || mes == 10 || mes == 11) {
  estacion = "Otoño";
} else {
  estacion = "Valor incorrecto";
}
console.log("estacion :>> ", estacion);

// Ejercicio 2
let hora = new Date().getHours();
console.log("hora :>> ", hora, typeof hora);

if (hora >= 6 || hora <= 11) {
  console.log("Buenos días");
} else if (hora >= 12 || hora <= 18) {
  console.log("Buenas Tardes");
} else if (hora >= 19 || hora <= 24) {
  console.log("Buenas noches");
} else if (hora >= 0 || hora <= 6) {
  console.log("Durmiendo");
} else {
  console.log("desconocido");
}

// Switch
let num = 3;
let texto = "Valor desconocido";

switch (num) {
  case 1:
    texto = 'Numero 1';
    break;
  case 2:
    texto = 'Numero 2';
    break;
  case 3:
    texto = 'Numero 3';
    break;
  case 4:
    texto = 'Numero 4';
    break;
  case 5:
    texto = 'Numero 5';
    break;
  default:
    texto = 'No programado'
    break;
}
console.log('num :>> ', num);

// swich utiliza comparaciones estrictas (tipo y valor)
// let month = '11';
let month = 11;
let season = "";

switch (month) {
  case 12: case 1: case 2:
    season = "Invierno";
    break;
  case 3: case 4: case 5:
    season = "Primaver";
    break;
  case 6: case 7: case 8:
    season = "Verano";
    break;
  case 9: case 10: case 11:
    season = "Otoño";
    break;
    default:
    season = "Valor incorrecto";
    break;
}

console.log("season :>> ", season);