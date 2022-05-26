// Arreglos

// let autos_antiguo = new Array('BMW', 'Mercedes Benz', 'Volvo');
const autos = ["BMW", "Mercedes Benz", "Volvo"];
console.log("autos :>> ", autos);
console.log("autos[0] :>> ", autos[0]);

// Recorrer elementos
for (let i = 0; i < autos.length; i++) {
  console.log(i + ": " + autos[i]);
}

autos.forEach((auto) => {
  console.log("auto :>> ", auto);
});

for (const auto of autos) {
  console.log("auto :>> ", auto);
}

// Modificar elemento
autos[1] = "MercedesBenz";
console.log("autos :>> ", autos);

// Agregar elemento
autos.push("Audi");
autos[autos.length] = "Cadilac";
autos[6] = "Cadilac";
console.log("autos :>> ", autos);

// Eliminar elemento
autos.pop();
console.log("autos :>> ", autos);

// Preguntar si es un arregllo
console.log('Array.isArray() :>> ', Array.isArray(autos));
console.log('autos instanceof Array :>> ', autos instanceof Array);