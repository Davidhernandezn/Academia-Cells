function funct(){
let zero = 0;
function multiply(x) { return x * 2;}
function add (a = 1 + zero, b = a, c = b + a, d = multiply(c)){
    
    console.log('VALOR: ',(a + b + c), d);
}
add(1);
add(3);
add(2,7);
add(1,2,5);
add(1,2,5,10);

multiply()
add()
}
 funct()

