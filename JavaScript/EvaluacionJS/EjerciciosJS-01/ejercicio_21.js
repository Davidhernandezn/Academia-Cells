function foo(){
    var a = true;
 bar();
    function bar (){
        const a = false;
        console.log(a);
    }

    a = false;
    a = false;
    console.log(a);
}

foo()