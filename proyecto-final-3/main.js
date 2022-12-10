//Variables
let matriz = [];
let firstArray = [4, "hola", "l", 2];
let secondArray = [4, "ola", "k", 2];

/*Ejercicio 1: Escriba un programa que reciba y genere una matriz del tamaño de la entrada y que
contenga una X representada por medio de ‘x’. */
function createX(value) {
  for (let i = 0; i < value; i++) {
    let row = [];
    for (let j = 0; j < value; j++) {
      if(i == j) {
        row.push("x");
      } else if(j + 1 == value - i){
        row.push("x");
      } else {
        row.push("");
      }
    }
    matriz.push(row);
  }
  return matriz;
}

/*Ejercicio 2: Escriba un programa que reciba dos arreglos con elementos y verifique si ambos
arreglos contienen los mismos elementos. */
//Ejercicio realizado con Javier Barboza
function iguales(a, b){
  a.sort();
  b.sort();
  let repetidos = [];

  for (i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      repetidos.push(a[i], b[i]);
    }
  }

  if (repetidos.length < 1) {
    console.log("Los dos arreglos contienen los mismos elementos");
  } else { console.log("Los dos arreglos no contienen los mismos elementos.", repetidos)}
}


function main(){
  console.log(createX(6));
  iguales(firstArray, secondArray);
}

main();
