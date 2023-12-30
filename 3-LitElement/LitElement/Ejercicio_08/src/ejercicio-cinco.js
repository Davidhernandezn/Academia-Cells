import { LitElement, html } from 'lit-element';

export class EjercicioCinco extends LitElement{
// DEFINIR PROPIEDADES
    static get properties(){
        return{
            countries: {type: Array}
        }
 
}

// PARA INICIALIZAR PROPIEDADES
constructor(){
    super();
    this.countries = ['Mexico','Colombia','Holanda','Alemania'];
  }

// render para llamar al template
    render(){
        return html `
        <select @change="${this.showValue}">
            <!--Imprimir y recorrer array-->
            <option selected>---</option>
            ${this.countries.map(i => html`<option value="${i}">${i}</option>`)}
        </select>
        `
    }

    showValue(e){
        let valueSelect = e.target.value;
        console.log('VALOR =>', valueSelect)

    }
}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('ejercicio-cinco',EjercicioCinco);