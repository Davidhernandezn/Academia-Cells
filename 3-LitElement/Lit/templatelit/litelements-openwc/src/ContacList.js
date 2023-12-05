import { html, css, LitElement } from 'lit-element';
import '../src/ContactoLitelement'

export class EContactList extends LitElement{
    static get properties(){
        return{
        contactos:{type:Array}
        };
    }

    
constructor(){
    super();
    this.contactos = [
        {
            nombre:'Lucho Godinez',
            email:'user1_some_email@mail.com'
        },
        {
            nombre:'Hugo Sanches',
            email:'user2_some_email@mail.com'
        },
        {
            nombre:'Jhon Doe',
            email:'user3_some_email@mail.com'
        }
    ];
}

render(){
    return html`
    <div>
        ${this.contactos.map(contac =>
            html`<contacto-component nombre="${contac.nombre}"
            email="${contac.email}"></contacto-component>`)}
    </div>
    `
}}

customElements.define('contaclist-component', EContactList);
