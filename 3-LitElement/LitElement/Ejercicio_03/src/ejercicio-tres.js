import { LitElement, html } from 'lit-element';

export class EjercicioTres extends LitElement{

    // DEFINIR PROPIEDADES
    static get properties(){
        return{
            prop1: {type : String},
            prop2: {type : String},
            prop3: {type : Boolean},
            prop4: {type : String},
        };
}

    // PARA INICIALIZAR VALORES
constructor(){
    super();
    this.prop1 = 'Enlace de texto';
    this.prop2 = 'myDiv';
    this.prop3 = false;
    this.prop4 = 'Placeholer';
}

// render para llamar al template
    render(){
        return html `
            <p>Estamos en el tercer componente</p>
        <!--Binderpor enlace de texto-->
        <div>${this.prop1}</div>
        <!--Binderpor enlace de atributo-->
        <div id="${this.prop2}">Enlace de atributo</div>

        <!--Enlace de atributo booleano deshabilitar input-->
        <input type="text" ?disabled=${this.prop3}>

        <!--Vincular la propiedad al valor del elemento-->
        <input type="text" .value="${this.prop4}">

        <!--ENLACE A UN EVENTO-->
        <button @click="${this.clickHandler}">Dar Click!</button>
        `
    }

    clickHandler(e){
        console.log('Diste click en boton')
    }
}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('ejercicio-tres',EjercicioTres);