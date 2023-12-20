function funct(){
    var a = 'hello';
    var b = 'word';

 bar();
    function bar (){
        var b = 'word';
        console.log(a);
        console.log(b);
    }
    console.log(a);
    console.log(b);

}
funct()