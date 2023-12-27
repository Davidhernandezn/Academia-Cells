import { LitElement, html } from 'lit-element';

export class EjercicioCuatro extends LitElement{

    // DEFINIR PROPIEDADES
    static get properties(){
        return{
        }
}

    // PARA INICIALIZAR VALORES
constructor(){
    super();
}

// render para llamar al template
    render(){
        return html `
        <p>Cuarto Componente</p>

        <div>
            <!--<slot>desconocido</slot>-->
            <slot name="name"></slot>
            <slot name="age"></slot>
            <slot name="job"></slot>
        </div>

        `
    }
}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('ejercicio-cuatro',EjercicioCuatro);