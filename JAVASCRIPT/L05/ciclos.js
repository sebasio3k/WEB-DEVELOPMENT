// ciclos

// while
let contador = 0;
while (contador < 3) {
  console.log("contador :>> ", contador);
  contador++;
}
// do while
do {
  console.log("contador :>> ", contador);
  contador--;
} while (contador > 0);

console.log("contador :>> ", contador);

// for, break
for (let cont = 0; cont <= 10; cont++) {
  if (cont % 2 == 0) {
    console.log("cont :>> ", cont);
    break;
  }
}

//continue, etiquetas
inicio:
for (let c = 0; c <= 10; c++) {
  if (c % 2 !== 0) {
    continue inicio;
  } else {
    console.log("c :>> ", c);
  }
}
