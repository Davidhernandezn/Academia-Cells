var anObject ={
    foot: 'bar',
    length: 'interesting', '0':'zero',  '1':'one!'
};

var anArray = ['zero.', 'one.'];

console.log(anArray[0], anObject[0]);
console.log(anArray[1], anObject[1]);
console.log(anArray.length, anObject.length);
console.log(anArray.foo, anObject.foo);

console.log(typeof anArray == 'object', typeof anObject == 'object');
console.log(anArray instanceof Object, anObject instanceof Object);
console.log(anArray instanceof Array, anObject instanceof Array);
console.log(Array.isArray(anArray), Array.isArray(anObject));

// zero. zero	Se trata de imprimir el primer elemento de anArray que tiene un string llamado zero, pero cuando se imprime anObject accede al valor asociado a la clave 0 que es igual  a zero.
// one. one!	Imprime el elemento con pocisión 1 de anArray que tiene un string llamado one, pero cuando se imprime anObject accede al valor asociado a la clave 1 que es igual  a one!.
// 2 interesting	Imprime el tamaño de anArray  que es 2,  cuando intenta imprimir el tamaño anObject pero debido a que es un objeto entonces accede a la propiedad llamada length que contiene el valor interesting.
// undefined undefined	Devuelve undefinded debido a que anArray no tiene propiedad llamada foo y  el objeto anObject si cuenta con una propiedad llamada foo pero aun no esta definida por lo que devuelve undefined.
// true true	Devuelve true en ambos debido que al hacer la comparacion de anObject y anArray con typeof javascript los considera como tipo objeto.
// true true	Devuelve true en ambos debido que instanceof valida si es instancia de  un objeto o una clase por lo que es correcto ambos son objetos.
// true false	Primero devuelve true ya que anArray es una instancia de la clase Array, depues devuelve false ya que anObject es un objeto y estamos validando si tambien es una intancia de la clase array.
// true false	Validamos si nuestros valores son arrays por lo cual anArray si lo es, por eso devuelve true, pero al validar anObject devuelve false por que es un objeto.

