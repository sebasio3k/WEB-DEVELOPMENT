//Precedencia de operadores

let a = 3,
  b = 2,
  c = 1,
  d = 4;

let z = a * b;
console.log("z :>> ", z);

z = c + a * b;
console.log("z :>> ", z);

z = a * b + c / d;
console.log("z :>> ", z);

z = c + (a * b) / d;
console.log("z :>> ", z);

// Operador de asignacion

let e = 1;
e += 3; // asignacion compuesto

console.log("e :>> ", e);

// Operador de comparacion
let w = 3,
  x = 3,
  y = "3";

z = w == x; // == revisa solo valor
console.log("z :>> ", z);

z = w == y;
console.log("z :>> ", z);

z = w === y; // === revisa valor y tipo
console.log("z :>> ", z);

z = w != x; // == revisa solo valor
console.log("z :>> ", z);

z = w != y;
console.log("z :>> ", z);

z = w !== y; // === revisa valor y tipo
console.log("z :>> ", z);

// Operadores Relacionales

z = 3 < 2;
console.log('z :>> ', z);

z = 3 <= 3;
console.log('z :>> ', z);
