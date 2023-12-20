  var foo = function(val){ return val || 'default'};
        console.log(foo('burger'));
        console.log(foo(100));
        console.log(foo([]));
        console.log(foo(0));
        console.log(foo(undefined));
