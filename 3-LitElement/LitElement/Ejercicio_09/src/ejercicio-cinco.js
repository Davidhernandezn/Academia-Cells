import { LitElement, html } from 'lit-element';

export class EjercicioCinco extends LitElement{
// DEFINIR PROPIEDADES
    static get properties(){
        return{
            clicks: {type: Number}
        }
 
}

// PARA INICIALIZAR PROPIEDADES
constructor(){
    super();
    this.clicks = 0;
  }

// render para llamar al template
    render(){
        return html `
    <h1>Tu contador = ${this.clicks}</h1>
    <hr>
    <button @click="${this.aumentarContador}">AUMENTAR</button>
    <button @click="${this.disminuirContador}">DISMINUIR</button>

        `
    }

    aumentarContador(){
        this.clicks++;
        console.log(this.clicks)
    }

    disminuirContador(){
        this.clicks--;
        console.log(this.clicks)
    }

}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('ejercicio-cinco',EjercicioCinco);