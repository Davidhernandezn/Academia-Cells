var myArray = [1, 2, 3, 4];

function imprimirMaximoYMinimo(array) {
  var maximo = Math.max(...array);
  var minimo = Math.min(...array);

  console.log("Número máximo:", maximo);
  console.log("Número mínimo:", minimo);
}

imprimirMaximoYMinimo(myArray);
