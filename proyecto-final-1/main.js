let numero = Number(prompt("Ingrese el valor para saber si es un número primo"));
let raiz =Math.sqrt(numero);
let lista = [];
let final = "";


/*Ejercicio 1: Escriba un programa que solicite un número al usuario e imprima en la consola si el
número es primo (solo divisible entre 1 y él mismo) o no.*/

function numeroPrimo() {
  for(let i = 2; i <= raiz; i++){
    if(numero % i === 0){
      console.log("Ejercicio 1: El número " + numero + " no es primo");
    } else {
      console.log("Ejercicio 1: El número " + numero + " es primo") + numero > 1;
    }
  }
}  

//Ejercicio 3: Escriba un programa que imprima todos los números del 1 al 100, uno por línea.
function contador(){
  for (let i = 0; i <= 100; i++) {
    console.log("Ejercicio 3: " + i);
  }
}
//Ejercicio 4: Modifique el programa anterior para que sólo imprima los números pares.
function par(){
  for (let i = 0; i <= 100; i++) {
    if(i % 2 == 0) {
      console.log("Ejercicio 4: " + i);
    }
  }  
}

/*Ejercicio 5: Modifique el programa del ejercicio 4 para que imprima 10 números por línea,
separados por un espacio. La primera línea tendrá los números del 1 al 10, la segunda del 11 al 20,
la tercera del 21 al 30 y así hasta llegar a 100.*/

function contadorDeDiez(){
  for(let i = 0; i <= 100; i++){
    if(i % 10 == 0){
    console.log(lista.push(i + final));
    console.log("\n");
    } else {
    console.log(lista.push(i));
    }
  }
}

function main(){
  numeroPrimo();
  contador();
  par();
  contadorDeDiez(lista);
}

main();