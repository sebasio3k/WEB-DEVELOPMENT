// Concatenacion de cadena
var nombre = "Juan";
var apellido = "Perez";

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

// Cadenas se evaluan de izquierda a derecha
//contexto string
var x = "Juan" + 211;
console.log(x);

x = nombre + 2 + 4;
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);
