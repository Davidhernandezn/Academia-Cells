import { LitElement, html, css } from 'lit-element';

export class EjercicioCinco extends LitElement{
static get styles(){
    return css`

    h3{    color: greenyellow;
        background: black;}

    .fuchsia{
        color:fuchsia;
    }    

    .cyan{
        color:cyan;
    }
    `
}

// DEFINIR PROPIEDADES
    static get properties(){
        return{
            myBool: {type: Boolean}
        }
 
}

// PARA INICIALIZAR PROPIEDADES
constructor(){
    super();
    this.myBool = false;
  }

// render para llamar al template
    render(){
        return html `
        <!--OPERADOR TERNARIO VALIDA SI ES TRUE O FALSE-->
        <h3 class="${this.myBool? 'fuchsia': 'cyan'}">Soy un Texto</h3>
        <button @click="${this.clickHandler}">Click</button>`
    }

    clickHandler(){
        this.myBool = !this.myBool;
        console.log(this.myBool);
    }
}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('ejercicio-cinco',EjercicioCinco);