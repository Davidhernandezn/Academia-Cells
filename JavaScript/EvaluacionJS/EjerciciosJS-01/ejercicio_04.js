function funct(){
    var a = 0;
    var str = 'not a';
    var b = '';
    b = a === 0 ? (a = 1, str += ' test') : (a = 2);
    console.log("a: ", a);
    console.log("b: ", b);
}

funct();