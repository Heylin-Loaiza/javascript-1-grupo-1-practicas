//Variables
var arreglo = [];
let sumar = 0;
let promedio;
let minimo = 0;
let maximo = 1;


while (true) {
  var preguntarNumero = prompt("Ingrese la lista de números");

  if (preguntarNumero == "") {
    break;
  }

  arreglo.push(parseInt(preguntarNumero));
}
console.log(arreglo);

function sacarPromedio(){
  //suma y promedio
  for(let i = 0; i< arreglo.length; i++){
    sumar += arreglo[i];
  }
  promedio = sumar/ arreglo.length;
  return "La suma de los números es " + sumar + " y el promedio es " + promedio;

}

function sacasrMediana (){
  arreglo.sort();
  console.log(arreglo);

  let listaOrdenada = arreglo.length;
  let mediana;

  let mitad = listaOrdenada / 2;

  if (listaOrdenada % 2 === 0) {
    mediana = (arreglo[mitad] + arreglo[mitad - 1]) / 2;
  } else { mediana = arreglo[Math.floor(mitad)]};

  return "La mediana es: " + mediana;
}

function minMax (){
  for (let i = 0; i < arreglo.length; i++){
    minimo = arreglo[0];
    if(minimo > arreglo[i]){
      minimo = arreglo[i];
    };

    if (maximo < arreglo[i]){
      maximo = arreglo[i];
    };
  };
  return "El número minimo es " + minimo + " y el número máximo es " + maximo;
}


function main(){
  console.log(sacarPromedio());
  console.log(sacasrMediana());
  console.log(minMax());
}

main();