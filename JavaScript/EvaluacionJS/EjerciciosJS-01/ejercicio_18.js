function funct(){
    var i = 0;
    while (i < 3){
        if(i === 1){
            i = 2;
            continue;
        }

        console.log(i);
        i++;
    }
}

funct()