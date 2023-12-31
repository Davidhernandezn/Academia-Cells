import { html, css, LitElement } from "lit";
import { buttonStyles } from "./_module-styles";

export class SharingStyles extends LitElement{
    static get styles(){
        return[
            buttonStyles,
            css`
            :host{
                display:block;
                border: 1px solid black;
            }`
        ]
    }

    render(){
        return html`
        <button class="blue-button">Click</button>
        <button class="blue-button" disabled>No Click</button>
        `;}
}