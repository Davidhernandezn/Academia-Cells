function funct(){
    var array = [5,10,15,20,25];

    console.log(Array.isArray(array));
    console.log(array.includes(10));
    console.log(array.includes(10, 2));
    console.log(array.indexOf(25));
    console.log(array.lastIndexOf(10, 0));
}
funct()