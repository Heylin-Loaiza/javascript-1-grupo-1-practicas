//variables
let numero = Number(prompt("Ingrese el número"))

let numeroEjercicio2 = Number(prompt('ingrese el numero'));

let frase = prompt("ingrese la frase");
let palabra = [...frase];

//Escriba un programa que solicite un número al usuario e indique si es: Par o impar,Divisible entre 3, Divisible entre 5.
function division(){
  if (numero %2 == 0 && numero %3 == 0) {
    return ("es par y divisible por 3");
  } else if (numero %2 == 0 && numero %5 == 0){
    return ("es par y divisible por 5")
  }else if (numero %2 != 0 && numero %3 == 0) {
    return ("es impar y divisible por 3");
  } else if (numero %2 != 0 && numero %5 == 0){
    return ("es impar y divisible por 5")
  }else if (numero %2 == 0) {
    return ("es par")
  }else if (numero %2 != 0) {
    return ("es impar")
  }else if (numero %3 == 0) {
    return ('es divisible entre 3');
  } else if (numero %5 == 0) {
    return ('es divisible entre 5');
  } else{
    return('error')
  }
}

// ejercicio 2: Escriba un programa que solicite al usuario un número e imprima la suma de todos los números desde 1 hasta ese número.

function suma (numeroEjercicio2) {
  if(numeroEjercicio2 === 0) return 0;
  return numeroEjercicio2 + suma(numeroEjercicio2 - 1);
} 

//ejercicio 3:Escribe un programa que reciba un string y retorne el mismo string invertido. Utilice un while para resolver este ejercicio.

// let palabra = prompt("palabra");
// while(palabra = 0) {
//   let nuevaPalabra = "";
//   nuevaPalabra += palabra[i -1];
//   i--
// }

// console.log(nuevaPalabra);

//ejercicio 4: Escriba un programa que reciba una frase y este debe de intercambiar las vocales por la ‘i’.

function cambiarVocales (){
  for(let i= 0; i < palabra.length; i++){
      if(palabra[i] === 'a' || palabra[i] === 'e' || palabra[i] === 'o' || palabra[i] === 'u'){
        palabra[i] = 'i';
      }
    }
  
     return (palabra.join(""));
}


//ejercicio 5: Escriba un programa que reciba una palabra y reordene sus letras en orden alfabético.

function ordenarPalabra(palabra){
    let i = [...palabra];
    return i.sort().join("");
}


function main(){
    console.log('Ejercicio 1: ' + division());
    console.log('Ejercicio 2: ' + suma(numeroEjercicio2));
    console.log('Ejercicio 4: ' + cambiarVocales());
    console.log('Ejercicio 5: ' + ordenarPalabra("calendario"));
}

main();