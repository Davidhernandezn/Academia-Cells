function funct(){
    var namedSum = function sum(a,b){
        return a + b;
    }

    var anonSum = function (a,b){
        return a + b;
    }

    console.log(namedSum (1, 3));
    console.log(anonSum(1, 3));
}

funct()