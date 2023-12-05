import { html, css, LitElement } from 'lit';

export class LitelementsOpenwc extends LitElement {
  static styles = css`
    div {
      border:1px solid #ddd;
    }

  `;

  static get properties (){
    return{
    nombre:{type:String},
    email:{type:String},
    verMas:{type:Boolean}
  };
}

  constructor() {
    super();
    this.verMas = false;
  }


  render() {
    return html`
    <div>
      <h1>${this.nombre}</h1>
      <p><a href="#" @click="${this.toggle}">Ver más</a></p>

      ${this.verMas?
      html`Email: ${this.email}`:
      ''
      }
     </div>
 `
  }

toggle(e){
  e.preventDefault();
  this.verMas = !this.verMas;
  }
}
