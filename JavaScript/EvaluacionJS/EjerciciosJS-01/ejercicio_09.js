function funct(){
    var animal = 'Lion';
    switch (animal){

        case 'Dog':
            console.log('I will not run  since animal !== "Dog"');
            break;
        
        case 'Cat':
            console.log('I will not run  since animal !== "Cat"');
            break;
        default:
            console.log('I will not run  since animal does not match any other case"');
    }
}

funct()