// CLASES
// Hoisting no se aplica para clases, no es posible lo siguiente:
// let persona3 = new Persona(); 

class Persona { // Atm hace extends a clase Object

  // Atributos de clase
  static contadorObjetosPersona = 0;
  static contadorPersonas = 0;

  //atributo de objetos
  email = 'Valor Default email';

  // Método estático
  static get MAX_OBJ() {
    return 5;
  }

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    if (Persona.contadorPersonas < Persona.MAX_OBJ) {
      this.idPersona = ++Persona.contadorPersonas;
    }
    else{
      console.log('Se han superado el máx de obj');
    }
    Persona.contadorObjetosPersona++;
  }

  // Getters
  get nombre() {
    return this._nombre;
  }
  get apellido() {
    return this._apellido;
  }

  // Setters
  set nombre(nombre) {
    this._nombre = nombre;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }

  // Métodos
  nombreCompleto() {
    return `${this.idPersona}: ${this._nombre} ${this._apellido}`
  }
  toString() {
    /*Polimorfismo, multiples formas en tiempo de ejecición, el método 
    nombreCompleto que se ejecuta depende de si es una referencia de tipo 
    clase padre o hijo*/
    return this.nombreCompleto();
  }

  // STATUC: metódos asociados solo con clase, no con objetos
  static saludar() {
    // console.log("Saludos desde método static");
    return "Saludos desde metodo static";
  }
  static saludar2(persona) {
    return `Saludos ${persona.nombre} ${persona.apellido}`;
  }

}

let persona1 = new Persona("Sebastian", "Hernandez");
console.log(persona1.toString());
console.log("persona1 :>> ", persona1);
console.log("persona1.nombre :>> ", persona1.nombre);
persona1.nombre = "Alfred";
console.log("persona1.nombre :>> ", persona1.nombre);
persona1.apellido = "Ashford";
console.log("persona1.apellido :>> ", persona1.apellido);
console.log(persona1.email);
console.log(Persona.email);
console.log(persona1.nombreCompleto());

//NO se puede llamar metodo static desde un objeto:
// console.log(persona1.saludar());
// Persona.saludar();
console.log(Persona.saludar());
console.log(Persona.saludar2(persona1));
console.log(Persona.contadorObjetosPersona);
console.log(persona1.contadorObjetosPersona);

let persona2 = new Persona("Juan", "Perez");
console.log("persona2 :>> ", persona2);
console.log(Persona.contadorObjetosPersona);
console.log(persona2.nombreCompleto());


// Herencia: extends <clase>
class Empleado extends Persona {

  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); // Constructor clase padre
    this._departamento = departamento
  }

  // getters
  get departamento() {
    return this._departamento;
  }

  // setters
  set departamento(departamento) {
    this._departamento = departamento;
  }

  // Métodos
  nombreCompleto() {
    // return `${this._nombre} ${this.apellido}, Dpto: ${this._departamento}`
    return `${super.nombreCompleto()}, Dpto: ${this._departamento}.`
  }

}

let empleado1 = new Empleado('Sebas', 'HO', 'Sistemas');
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);
console.log(empleado1);
console.log(empleado1.nombre);
// Heredar método y sobreescritura:
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
console.log(Empleado.saludar());
console.log(Empleado.saludar2(empleado1));
console.log(empleado1.email);
console.log(Empleado.email);

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);

let persona3 = new Persona('Veronica', 'Ashford')
let persona4 = new Persona('Alexia', 'Ashford')
let persona5 = new Persona('Alexander', 'Ashford')
console.log(persona3.toString());
console.log(persona4.toString());
console.log(persona5.toString());

