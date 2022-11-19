//Variables globales
let año = Number(prompt("Ingrese el año para saber si es bisiesto"));
let texto = prompt('Ingrese el texto aquí');
let caracter = prompt('Ingrese el carácter que desea buscar');
let numeroSecreto = 57;


/*Ejercicio 1: Escriba un programa que calcule el factorial de un número de manera recursiva. */
function factorial(numFactorial) {
  if(numFactorial === 0) return 1;
  return numFactorial * factorial(numFactorial - 1);
}

/*Ejercicio 2: Escriba un programa que solicite al usuario un año y le indique si es bisiesto o no.
*/

function bisiesto (){
  if(año %4 == 0){
    if(año %400 == 0 || año % 100 !=0){
      return (año + " Es un año bisiesto");
    } else {
      return (año + " No es un año bisiesto");
    }
  }
}

// Ejercicio 3: Escriba un programa que solicite al usuario un texto y un carácter
// y le indique al usuario cuántas veces aparece en el texto ese carácter.

function buscarCaracter (){
  let contar = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === caracter){
      contar++;
    }
  }
  return ("El caracter " +  caracter + " se encuentra " + contar + " veces");
}


/*Ejercicio 4: Escriba un programa que le solicite al usuario adivinar un número “secreto” del 1 al
100. El programa debe continuar preguntando por nuevos números al usuario hasta
que lo adivine o ingrese un cero para salir. El programa debe indicar, cada vez que el
usuario falle, si el número ingresado es mayor o menor que el número a adivinar.*/

function adivinarNumero (){
  while (true) {
    let numeroUsuario = Number(prompt("Adivine el número secreto, ingrese un número del 1 al 100"));

    if(numeroUsuario === numeroSecreto){
      alert("Acertó el numero secreto")
      break;
    } else if(numeroUsuario == 0) {
      alert("Gracias por participar")
      break;
    } else {
      alert("Numero incorrecto, intente de nuevo o ponga 0 para salir") 
    } 
  }
}

/* Ejercicio 5: Escriba un programa que solicite un texto y lo imprima en la consola con todos los
espacios en blanco removidos. Por ejemplo, si el usuario introduce “May the force be
with you”, el programa debe retornar “Maytheforcebewithyou”.
*/

function sinEspacios (textoSinEspacios){
  return textoSinEspacios = texto.replace(/\s+/g, '');
}


function main (){
  console.log(factorial(8));
  console.log(bisiesto());
  console.log(buscarCaracter());
  console.log(adivinarNumero());
  console.log(sinEspacios());
}

main();