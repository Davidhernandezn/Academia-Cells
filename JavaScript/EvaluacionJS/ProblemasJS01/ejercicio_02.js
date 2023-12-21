function funct(){
var numbers = [5, 32, 43, 4];
var resultado;
console.log('Arreglo inicial: ',numbers);
resultado = numbers.filter(function(n) { return n % 2 !== 0; }); 
console.log('Arreglo con metodo filter ',resultado);
}

funct()
