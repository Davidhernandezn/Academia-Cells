class MiMensaje extends HTMLElement{
    constructor(){
        super();
        this.addEventListener('click', function(e){
            alert('Click en mensaje');
        });
        console.log('Constructor: cuando el elemento es creado');
    }

    //PROPIEDAD PARA ESCUCHAR SOLO LOS ATRIBUTOS DEFINIDOS EN EL ARREGLO USADO
    //ATTRIBUTECHANGECALLBACK
    static get observedAttributes(){
        return ['msj', 'casi-visible'];
    }

    //CALLBACK CUANDO SE INSERTA EL ELEMENTO EN EL DOM
    connectedCallback(){
        console.log('connectedCallback: Cuando el elemento es insertado en el documento');
    }

    disconnectedCallback(){
        alert('disconnected: Cuando el elemento es eliminado del documento');
    }


adoptedCallback(){
    alert('adoptedCallback: Cuando el elemento es adoptado por otro documento');
}

//CUANDO EL ATRIBUTO ES MODIFICADO, SOLO LLAMADO EN ATRIBUTOSOBSERVADOS DE
//LA PROPIEDAD OBSERVED ATRIBUTTES
attributeChangedCallback(attrName, oldVal, newVal){
    console.log('attributeCangeCallback: cuando cambia un atributo');
    if(attrName === 'msj'){
        this.pintarMensaje(newVal);
    }

    //
    if(attrName === 'casi-visible'){
        this.setCasiVisible();
    }
}

//PINTAR MESSAJE QUE SE DECLARA EN EL ATRIBUTO MSK
pintarMensaje(msj){
        this.innerHTML = msj
    }

//PROPIEDAD CASI VISIBLE  SINCRONIZADO CON EL ATRIBUTO 'CASI-VISIBLE'
    get casiVisible(){
        return this.hasAttribute('casi-visible');
    }

    setCasiVisible(value){
        if(value){
            this.style.opacity = 0.1;
        } else{
            this.style.opacity = 1;
        }
    }
}


customElements.define('mi-mensaje', MiMensaje);


let miMensaje = document.createElement('mi-mensaje')
miMensaje.msj = 'Otro mensaje';
document.body.appendChild(miMensaje);

//TAMBIEN PODEMOS CREAR UN ELEMENTO CON EL OPERADOR NEW
let tercerMensaje = new MiMensaje();
tercerMensaje.msj = 'Tercer Mensaje';
document.body.appendChild(tercerMensaje);





