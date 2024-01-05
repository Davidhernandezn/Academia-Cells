import { LitElement, html, css } from 'lit-element';
import { dividerStyles } from '../css/divider-styles';
import { generalStyles } from '../css/general-styles';
export class DividerComponent extends LitElement{
    static get styles(){
    //IMPORTAMOS MODULOS CSS
    return[
        dividerStyles,
        generalStyles
    ]
}

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
            <div class="grid-column-1">
                <divider-dashed>
                    <hr class="dashed">
                </divider-dashed>
            </div>
            <br><br>
            <div class="grid-column-1">
            <divider-dotted>
                    <hr class="dotted">
                </divider-dotted>
            </div>
            <br><br>
            <div class="grid-column-1">
            <divider-solid>
                    <hr class="solid">
                </divider-solid>
            </div>

        `
    }


}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('divider-lit',DividerComponent);