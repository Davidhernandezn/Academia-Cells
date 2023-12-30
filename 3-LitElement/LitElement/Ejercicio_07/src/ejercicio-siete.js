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

    //POR MODULO
// static get styles(){
//     return[
//         stylesModule,
//         //PODEMOS AGREGAR ESTILOS CSS css``
//     ]
// }

//ESTILOS CON PROPIEDADES PERZONALIZADAS HOST
static get styles(){
    return css `
    /**PODEMOS REUTILIZARLO EN OTROS COMPONENTES**/
        :host{
            --primary-color:blue;
            --font-size: 3.2rem;
            --pading-left:16px;
        }

        p{
            color: var(--primary-color);
            font-size: var(--font-size);
            padding-left: var(--pading-left);
        }
    `
}
// render para llamar al template
    render(){
        return html`
        <p>Ejercicio 7 y 9</p>
            <h1>Estilos estaticos</h1>

            <button class="btn">Click</button>
            <hr>
            <button class="btn" @click=${this.primerEvento}>Boton con Evento</button>
        `
    }

    primerEvento(){
        console.log('Diste Click')
    }
}
// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('ejercicio-siete',EjercicioSiete);