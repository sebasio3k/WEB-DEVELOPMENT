// FUNCIONES
// es un tipo de dato function, también es objeto
/*La funcion se puede mandar a llamar antes o despues
de la declaracion, gracias al 
HOISTING 
(mueve la declaracion de la funcion al inicio del programa) */

// Declaracion de la funcion
function miFuncion(a, b) {
  console.log("arguments :>> ", arguments);
  console.log("arguments.length :>> ", arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
  // console.log("a + b :>> ", a + b);
  return a + b;
}

// LLamando a la funcion
let resultado = miFuncion(3, 2);
console.log("resultado :>> ", resultado);

// FUNCIONES de tipo EXPRESION o ANONIMAS
let sumar = function (a, b) {
  return a + b;
};

resultado = sumar(1, 2);
console.log("resultado :>> ", resultado);

// FUNCIONES SELF INVOKING
// NO reutilizable
(function (a, b) {
  console.log("Ejecutando la funcion, sum:>> ", a + b);
})(3, 4);

let miFuncionTexto = miFuncion.toString();
// convierte funcion a texto
console.log("miFuncionTexto :>> ", miFuncionTexto);

// FUNCIONES FLECHA
// no se necesita return
const sumarFuncionFlecha = (a, b) => a + b;
res = sumarFuncionFlecha(1, 2);
console.log("res :>> ", res);

// Parámetros: cuando se declaran (variables)
// Argumentos: cuando se manda a llamar (valores)

// Ejercicio sumar todos los argumentos
// argumentos se asignan a arreglo arguments
let suma = sumarTodo(1, 2, 3, 4, 5);
console.log("suma :>> ", suma);

function sumarTodo() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  return suma;
}

// PASO POR VALOR
/* 
pasa una copia del valor
Para: tipos que no son objeto (primitivos): 
number, bool */

let x = 10;
console.log("x :>> ", x);

function cambiarValor(a) {
  a = 20;
  return a;
}

cambiarValor(x);
console.log("x no cambia :>> ", x);

// PASO POR REFERENCIA
/*Para objetos*/
const persona = {
  nombre: "Sebas",
  apellido: "HO",
};
console.log("persona :>> ", persona);

function cambiarValorObjeto(objeto) {
  objeto.nombre = "Daniel";
  objeto.apellido = "Hdez O.";
}

cambiarValorObjeto(persona);
console.log("persona :>> ", persona);
