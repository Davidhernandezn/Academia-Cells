import { LitElement, html, css } from 'lit-element';

export class EjercicioCinco extends LitElement{
static get styles(){
    return css`
        #correcto{
            color:green;
        }

        #error{
            color:red;
        }
    `
}

// DEFINIR PROPIEDADES
    static get properties(){
        return{
            respuesta: {type: String},
            respuesta1: {type: String},
            respuesta2: {type: String},
            respuesta3: {type: String},
            respuesta4: {type: String},
            titleQuestion: {type: String},
            correcta: {type: String},
            incorrecta: {type: String},
        }
 
}

// PARA INICIALIZAR PROPIEDADES
constructor(){
    super();

    this.respuesta = '';
    this.titleQuestion = '¿Cual de los siguiente pokemones no es de tipo fuego?'
    this.respuesta1 = 'Charizard';
    this.respuesta2 = 'Oddish';
    this.respuesta3 = 'Rapidash';
    this.respuesta4 = 'Cyndaquil';
    this.correcta = 'Respuesta correcta'
    this.incorrecta = 'Respuesta incorrecta, intentelo de nuevo'

  }

// render para llamar al template
    render(){
        return html `
        <h3>${this.titleQuestion}</h3>
        <p>${this.respuesta1}</p>
        <p>${this.respuesta2}</p>
        <p>${this.respuesta3}</p>
        <p>${this.respuesta4}</p>
        <input type="text" @change="${this.question}">
        <p>Tu respuesta es: ${this.respuesta}</p>
        <span id="correcto"></span>
        <span id="error"></span>
`
    }

    question(e){
        let question = e.target.value;
        this.respuesta = question;

        if(question === 'Oddish'){
            console.log('respuesta correcta', question);
            this.shadowRoot.getElementById("correcto").innerHTML = this.correcta;
        }else{
            console.log('Intenta denuevo', question);
            this.shadowRoot.getElementById("error").innerHTML = this.incorrecta;

        }
//LIMPIAR MENSAJE DESPUES DE 3 SEGUNDOS
        setTimeout(()=> {
            this.shadowRoot.getElementById("correcto").innerHTML="";
            this.shadowRoot.getElementById("error").innerHTML="";
        }, 3000)
    }
}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('ejercicio-cinco',EjercicioCinco);