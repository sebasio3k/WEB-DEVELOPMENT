// OBJETOS
/*Tipo primitivo tiene 1 valor individual
Objetos tienen asociadios propiedades y métodos*/

let persona = {
  // Propiedades:
  nombre: "Sebas",
  apellido: "HO",
  email: "bastian@mail.com",
  edad: 25,
  idioma: "es_mx",

  // Métodos
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
  get completeName() {
    return this.nombre + " " + this.apellido;
  },
  get lang() {
    return this.idioma.toUpperCase();
  },
  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },
};

console.log("persona :>> ", persona);
console.log("persona.nombre :>> ", persona.nombre);
console.log("persona.edad :>> ", persona.edad);
console.log("persona.nombreCompleto() :>> ", persona.nombreCompleto());
console.log("persona['nombre'] :>> ", persona["nombre"]);

// for in para recorrer propiedades de objeto:
for (const propiedad in persona) {
  console.log(persona[propiedad]);
}

// Agregar y eliminar propiedades de un objeto:
persona.tel = "0987654321";
console.log("persona :>> ", persona);
persona.tel1 = "73682372";
console.log("persona :>> ", persona);

delete persona.tel1;
console.log("persona :>> ", persona);

// Otra forma de crear objetos:
let persona2 = new Object();
persona2.nombre = "Charlie";
persona2.direccion = "Saturno 15";
persona2.tel = "1234567890";
console.log("persona2 :>> ", persona2);
console.log("persona2.tel :>> ", persona2.tel);

// Otras formas de imprimir objetos
console.log(persona.nombre + persona.apellido);
for (const propiedad in persona) {
  console.log(persona[propiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);
console.log(typeof personaString);

// get
console.log(persona.completeName);
console.log(persona.lang);

// set
persona.lang = "en";
console.log(persona.lang);
console.log(persona.idioma);

// Constructores:
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;

  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}

// Para agregar un nuevo atributo
Persona.prototype.tel = "2345678965";

let padre = new Persona("Juan", "Perez", "jperez@mail.com");
console.log("padre :>> ", padre);
console.log(padre.nombreCompleto());
padre.tel = "123456789";
console.log("padre.tel :>> ", padre.tel);

let madre = new Persona("Amelia", "Quintero", "aquin@mail.com");
console.log("madre :>> ", madre);
console.log(madre.nombreCompleto());
console.log("madre.tel :>> ", madre.tel);

//Formas de crear un objeto
let miObjeto = new Object();
let miObjeto2 = {}; //mejor

let miCadena1 = new String("Hola"); //Sintaxis más formal
let miCadena2 = "Hola";

let miNumero = new Number(1);
let miNumero2 = 1;

let miFuncion = new Function();
let miFuncion2 = function () {};

//CALL
let person1 = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompleto: function (titulo, tel) {
    return titulo + ': ' + this.nombre + " " + this.apellido + ', ' + tel;
  // nombreCompleto: function () {
    // return this.nombre + " " + this.apellido;
  },
};
let person2 = {
  nombre: "Carlos",
  apellido: "Lara",
};

console.log(person1.nombreCompleto());

// CALL-> Permite llamar un método definido en un objeto desde otro objeto
// Para pasar parámetros, se manda objeto y luego los argumentos
console.log(person1.nombreCompleto.call(person2, 'Persona2','123456' ));
// console.log(person1.nombreCompleto.call(person2));
console.log(person1.nombreCompleto("Persona1", "123456"));

//Apply-> mandar a llamar un método en un objeto que no tiene definido cierto metodo
// Para pasar argumentos se le mandan como arreglo
console.log(person1.nombreCompleto.apply(person2, ['Persona2','123456']));

