function funct(){
    var animal = 'kitty2';
    for (var i = 0; i < 5; ++i){
        if (animal === 'kitty') {
            break;
        } else {
            console.log(i);
        }
    }
}

funct();
