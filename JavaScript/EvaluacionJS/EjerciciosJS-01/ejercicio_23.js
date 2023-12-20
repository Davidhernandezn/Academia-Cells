function funct(){
    var a = [1,2,3,8,9,10];
    a.slice(0, 3).concat([4,5,6,7], a.slice(3,6));
    console.log(a);
    var a = [1,2,3,8,9,10];
    a.splice(3,0, ...[4,5,6,7]);
    console.log(a);
}
funct()