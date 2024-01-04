import { LitElement, html } from 'lit-element';
import { buutonStyles } from '../css/button-styles';


export class ButtonComponent extends LitElement{
// DEFINIR PROPIEDADES
    static get properties(){
    return{
    }  
}

// PARA INICIALIZAR PROPIEDADES
constructor(){
    super();
  }

// render para llamar al template
    render(){
        return html `
        <h1>BTN componente</h1>
        <button>Click</button>
        `
    }
}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('button-lit',ButtonComponent);