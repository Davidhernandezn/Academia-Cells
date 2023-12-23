import { LitElement, html } from 'lit-element';

export class EjercicioUno extends LitElement{
// render para llamar al template
    render(){
        return html `
            <p>Estamos en el primer componente</p>

        `
    }
}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('ejercicio-uno',EjercicioUno);