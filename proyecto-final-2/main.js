//Variables
let base = 7;
let exponente = 3;
let arreglo = [2,3,4,5,7];
let longitud = arreglo.length;
let triangulo1 = "";
let triangulo2 = "";

/*Ejercicio 1: Escriba un programa que imprima, utilizando ciclos, un cuadrado de 10x10 caracteres, 
por 2 triángulos, uno con el carácter '#' y el otro con el carácter */
function triangulo (){
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (i >= j) {
        triangulo2 += "#";
      } else {
        triangulo2 += " ";
      }
      if (i + j <= 9) {
        triangulo1 += "*";
      } else {
        triangulo1 += " ";
      }
    }
    console.log(triangulo1 + triangulo2);
    triangulo1 = "";
    triangulo2 = "";
  }
}

/*Ejercicio 2: Escriba una función que calcule el valor de un número N elevado por otro número M.*/
function potencia (){
  let resultado = Math.pow(base, exponente);
  return 'Ejercicio 2: El resultado es: ' + resultado;
}

/*Ejercicio 3: Escriba una función que resuelve el problema del ejercicio anterior de manera recursiva. */
function potenciaRecursiva (base, exponente){
  if(exponente==0){
      return 1;
  } else if (exponente < 0) {
      return potenciaRecursiva(base, exponente+1) / base;
  } else {
      return base * potenciaRecursiva(base, exponente-1);
  }
}
/*Ejercicio 4: Escriba una función recursiva que reciba un arreglo y calcule la suma de sus elementos. */
function sumaArreglo (arreglo, longitud) {
  if(longitud >= 1){
    return sumaArreglo(arreglo, longitud - 1) + arreglo[longitud - 1];
  }
  return false;
} 

function main(){
  console.log(potencia());
  console.log(potenciaRecursiva(base, exponente));
  console.log(sumaArreglo(arreglo, longitud));
  console.log(triangulo());
}

main();