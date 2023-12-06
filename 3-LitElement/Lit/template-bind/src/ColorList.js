import { LitElement, html } from "lit";
import './ListElement';

export class ColorList extends LitElement{
    static get properties(){
        return{
            colors: {type: Array}
        };
    }

    constructor(){
        super();
        this.colors = ['Rojo','Verde','Amarillo','Azul'];
    }

    //BIND A PROPIEDAD
    render(){
        return html `
        <list-element .items="${this.colors}"></list-element>
        `;
    }
}
