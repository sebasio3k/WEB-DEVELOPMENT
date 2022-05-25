// Declaracion de cadenas
// var (scope global, se queda con el ultimo valor definido), 
// let (scope de bloque, usar, buena práctica)
// const (no permite redefinir valor, se debe declarar y asignar)

//variable = literal (1, 10.0, "Nick");
let nombre;
nombre = "Sebastian";
console.log(nombre);

const apellido = "Hdez";

let nombreCompleto = nombre + " " + apellido;
console.log("nombreCompleto :>> ", nombreCompleto);

let x, y;
(x = 10), (y = 20);
let z = x + y;
console.log("z :>> ", z);
