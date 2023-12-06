import { html, css, LitElement } from 'lit';
export class InputSample extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--input-sample-text-color, #000);
    }
  `;

  static properties = {
    myDato: {type: String}
  };

  constructor() {
    super();
    this.myDato = 'Valor de inicialización';
  }

  render() {
    return html`
    <p>Soy My Element</p>
    <!--COMPONENTE HIJO-->
    <my-text-input value=${this.myDato} 
        @change=${this.inputCambiado}></my-text-input>

    <p>El dato escrito es ${this.myDato}</p>
    <button @click=${this.resetTexto}>Borrar Texto</button>
    `;
  }

  inputCambiado(e){
    this.myDato = e.detail;
  }

  resetTexto(){
    this.myDato ="";
  }
}
//PADRE