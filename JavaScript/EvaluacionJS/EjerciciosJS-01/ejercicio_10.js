function funct(){
    var name = 'Jhon'
    function jhon(){
        return 'Jhon';
    }

    function jacob(){
        return 'Jacob';
    }

    switch(name){
        case jhon():
            console.log('I will run if name === "Jhon"');
            break;

        case 'Ja' + 'ne':
            console.log('I will run if name === "Jane"');
             break;

        case jhon() + '' + jacob() + 'Jingleheimer Sch,idt': console.log('His name is equal to name too!');
        break;
    }
}

funct()