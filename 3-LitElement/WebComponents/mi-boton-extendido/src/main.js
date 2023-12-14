class MiBoton extends HTMLElement{
    constructor(){
        super();
        this.addEventListener('click', function(e){
            alert('Hola');
        });
    }
}
customElements.define('mi-boton', MiBoton);

customElements.define('mi-boton-2', class extends HTMLElement{
    constructor(){
        super();
        this.addEventListener('click', function(e){
            alert('Hola soy boton 2');
        });
    }
});


class MiBotonExtendido extends HTMLButtonElement{
    constructor(){
        super();
        this.addEventListener('click', (e)=>{
            console.log("event click: "+this.innerHTML);
            alert('MiBotonExtendido');
        });
    }

    static get ceName(){
        return 'mi-boton-extendido';
    }

    get is (){
        return this.getAttribute('is');
    }

    set is (value){
        this.setAttribute('is', value || this.ceName);
    }
}

customElements.define('mi-boton-extendido', MiBotonExtendido, {extends:'button'});


//PODEMOS CREAR UN NUEVO ELEMENTO USANDO LA API DEL DOM
const miBotonExtendido2 = document.createElement('button', {is: MiBotonExtendido.ceName});

miBotonExtendido2.textContent = "Soy un mi-boton-extendido";
document.body.appendChild(miBotonExtendido2);

const miBotonExtendido3 = document.createElement('button', {is: MiBotonExtendido.ceName});
miBotonExtendido3.textContent = "Hola-btn3";
document.querySelector("#container").appendChild(miBotonExtendido3);