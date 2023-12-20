function funct(){

    for(var i = 0; i < 5; i++){
        nextLoop2Iteracion:
        for(var j = 0; j < 5; j++){
            if(i == j) break nextLoop2Iteracion;
            console.log(i, j);
        }
    }
}
funct()