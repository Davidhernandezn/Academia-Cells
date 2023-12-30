//IMPORTAR CSS
import { LitElement, html, css } from 'lit-element';
import { stylesModule } from '../css/styles';//IMPORTAR MODULO CREADO

export class EjercicioSiete extends LitElement{
    // static get styles(){
    //     const mainColor = css `brown`;
    //     return css `
    //         h1{
    //             color: ${mainColor};
    //         }
    //     `;
    // }

static get styles(){
    return[
        stylesModule,
        //PODEMOS AGREGAR ESTILOS CSS css``
    ]
}

// render para llamar al template
    render(){
        return html`
        <p>Ejercicio 7</p>
            <h1>Estilos estaticos</h1>

            <button class="btn">Click</button>
        `
    }
}
// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('ejercicio-siete',EjercicioSiete);