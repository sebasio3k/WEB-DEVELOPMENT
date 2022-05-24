// Tipos de datos

/* comentario
varias lineas
*/

var nombre = "Sebastian"; // String
var numero = 1000; // number
var numero_flotante = 1000.5; // number
var boleano = true; // boolean
var objeto = {
  nombre: "Sebasio",
  apellido: "HO",
  edad: 25,
}; // object
function miFuncion() {} // function
var simbolo = Symbol("Mi símbolo"); // Symbol (valor unico de una variable)
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
} // Clases en JS son funciones
var x; // undefined
var x1 = undefined; // undefined
var y = null; // null = ausencia de valor
var z = ""; // empty string

// Arreglos
var autos = ["BMW", "Audi", "Volvo"]; // object

console.log(nombre, typeof nombre);
console.log(numero);
console.log(numero_flotante, typeof numero_flotante);
console.log(boleano, typeof boleano);
console.log(objeto);
console.log(miFuncion, typeof miFuncion);
console.log(simbolo, typeof simbolo);
console.log(Persona, typeof Persona);
console.log(x, typeof x);
console.log(x1, typeof x1);
console.log(z, typeof z);
console.log(y, typeof y);
console.log(autos, typeof autos);
