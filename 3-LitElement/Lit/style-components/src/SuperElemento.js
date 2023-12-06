import { html, css, LitElement } from "lit";

export class SuperElemento extends LitElement{
    static get styles(){
        return css `
        button{
            width:300px;
            font-style: italic;
        }
        `;
    }

    render(){
        return html`
        <h2>${this.header}</h2>
        <button>Click</button>
        `
    }
}    

customElements.define('super-elemento', SuperElemento);
