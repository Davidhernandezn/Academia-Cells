import { html, css, LitElement } from 'lit';

export class HostElement extends LitElement {
  static get styles(){
    return css`
    /*SELECTS THE HOST */
    :host {
      display: block;
      background-color: azure;
    }
    /**SELECTS THE HOST ELEMENT IF IT IS HIDDEN */
    :host([hidden]){
      display: none;
    }
    /**SELECTS THE HOST ELEMENT IF IT HAS CLASS BLUE*/
    :host(.blue){
      background-color: aliceblue;
      color: blue;
    }
    p{
      font-family: fantasy;
    }`;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    `;
  }
}
