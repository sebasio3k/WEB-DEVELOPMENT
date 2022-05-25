// Operador and && ambos true para true

let a = 15;
let max = 10;
let min = 0;

if (a >= min && a <= max) {
  console.log("dentro de rango");
} else {
  console.log("fuera de rango");
}

// Operador or || cualquiera true es true

let vacaciones = true, diaDescanso = false;

if (vacaciones || diaDescanso) {
    console.log('Puede ir al partido');
} else {
    console.log('No puede ir al partido');
}
