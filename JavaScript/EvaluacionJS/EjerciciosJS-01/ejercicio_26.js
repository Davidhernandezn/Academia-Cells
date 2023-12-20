function funct(){
    var array = ['a', 'b', 'c', 'd', 'e', 'f'];

    array.copyWithin(5,0,1);
    console.log(array);
    array.copyWithin(3,0,3);
    console.log(array);
    array.fill('Z', 0, 5);
    console.log(array);
}

funct()