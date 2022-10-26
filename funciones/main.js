//variables
let numerosArray = String(prompt("Ingrese la lista de números únicamente separado por coma y sin espacios"));
let arrayEjercicioUno;
// let matriz= [ [1,0,0], [0,1,1], [0,1,0] ];
// let resultado = [];
let numeros = String(prompt("Ingrese la lista de números únicamente separado por coma y sin espacios"));
let repetidos = [];
let medida = 5;


//ejercicio 1
function numeroMax () {
    arrayEjercicioUno = numerosArray.split(',');
    console.log(Math.max(...arrayEjercicioUno));
}


//ejercicio 2
/*function comparar (arreglo) {
    arreglo = palabra.split("");

    for (let i = arreglo.length; i >= 0; i++) {
       if(palabra.reverse == palabra) {
        alert("si es palindromo");
       }
    } 
    return comparar;
}*/

//ejercicio 3
/*
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        
    }
}
console.log(resultado);*/

//ejercicio 4
numeros = numeros.split(',');
let arreglo =[...numeros].sort();

function numerosRepetidos (){
    for(let i= 0; i< arreglo.length; i++) {
        if(arreglo[i+1] === arreglo[i]){
            repetidos.push(arreglo[i]);
        }
    }
    console.log(repetidos);
} 

//ejercicio 5
function triangulo (){
   for (let i= 0; i< medida; i++){
        let linea = '';
        for (let contadorLinea = 0; contadorLinea<= i; contadorLinea++){
            linea += 'x ';
        }
        console.log(linea);
    } 
}


function main(){
    numeroMax();
    numerosRepetidos();
    triangulo();
}

main();