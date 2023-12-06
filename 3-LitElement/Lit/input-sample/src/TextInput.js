import {LitElement, html} from 'lit-element';

export class TextInput extends LitElement{
    static get properties(){
        return{
            value:{type:String}
        };
    }

    render(){
        return html`
        <p>
            <input type="text" .value="${this.value}"
            @input="${this.inputChange}">
        </p>
        `;
    }
//HIJO ENVIA INFO
    inputChange(e){
        this.value = e.target.value;
        this.dispatchEvent(new CustomEvent('change', {
            detail: this.value
        }));
    }
}

/**
CustomEvent representa eventos que son inicializados por una aplicación para cualquier propósito
 * 
dispatchEvent: el último paso en el proceso crear-inicializar-lanzar, que se usa para el lanzamiento manual de eventos en el modelo de implementación de eventos
*
<details> es usado como un widget de revelación a través del cual el usuario puede obtener información adicional
 */
