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
            <hr>
            <input type="text" placeholder="Input uno" id="inputUno" @change="${this.event}"><br><br>
            <input type="text" placeholder="Input dos" id="inputDos" disabled><br><br>
            <input type="text" placeholder="Input tres" id="inputTres" @keyup="${this.keyupEvent}"><br><br>
            <input type="text" placeholder="Input cuatro" id="inputCuatro" @input="${this.inputEvent}"><br><br>


        `
    }

    primerEvento(){
        console.log('Diste Click')
    }

    //EVENTO CHANGE
    event(e){
        let valueInput = e.target.value;
        let tamanio = valueInput.length;
        console.log('EVENTO CHANGE',valueInput, tamanio);
    }


    //EVENTO KEYUP // CADA QUE UN VALOR ES MODIFICADO
    keyupEvent(e){
        if(e.target.value.length === 4){
            this.shadowRoot.getElementById("inputDos").disabled = false;
        }else{
            this.shadowRoot.getElementById("inputDos").disabled = true;
        }
        console.log(e.target.value.length);
    }

    //EVENTO INPUT//DETECTA CADA CAMBI0
    inputEvent(e){
        if(e.target.value.length === 4){
            console.log('Es igual a 4');
        }else{
            console.log('No es igual');
        }

    }
}
// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('ejercicio-siete',EjercicioSiete);