//IMPORTAR CSS
import { LitElement, html, css } from 'lit-element';
export class EjercicioSiete extends LitElement{
    static get styles(){
        const mainColor = css `brown`;
        return css `
            h1{
                color: ${mainColor};
            }
        `;
    }

// render para llamar al template
    render(){
        return html`
        <p>Ejercicio 7</p>
            <h1>Estilos estaticos</h1>
        `
    }
}
// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('ejercicio-siete',EjercicioSiete);