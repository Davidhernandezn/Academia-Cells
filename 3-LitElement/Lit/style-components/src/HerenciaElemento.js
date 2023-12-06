import { css } from "lit";
import { SuperElemento } from "./SuperElemento";

export class HerenciaElemento extends SuperElemento{
    static get styles(){
        return[
            super.styles,
            css`button {color: red}`
        ];
    }
}

customElements.define('herencia-elemento', HerenciaElemento);
