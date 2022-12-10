function sumar(){
  const numero_uno = document.getElementById("primer-numero").value;
  const numero_dos = document.getElementById("segundo-numero").value;
  let resultado = Number(numero_uno) + Number(numero_dos);

  document.getElementById('resultado').innerHTML = resultado;
}

function restar(){
  const numero_uno = document.getElementById("primer-numero").value;
  const numero_dos = document.getElementById("segundo-numero").value;
  let resultado = Number(numero_uno) - Number(numero_dos);

  document.getElementById('resultado').innerHTML = resultado;
}

function multiplicar(){
  const numero_uno = document.getElementById("primer-numero").value;
  const numero_dos = document.getElementById("segundo-numero").value;
  let resultado = Number(numero_uno) * Number(numero_dos);

  document.getElementById('resultado').innerHTML = resultado;
}

function dividir(){
  const numero_uno = document.getElementById("primer-numero").value;
  const numero_dos = document.getElementById("segundo-numero").value;
  let resultado = Number(numero_uno) / Number(numero_dos);

  document.getElementById('resultado').innerHTML = resultado;
}