import { html, css, LitElement } from 'lit';

export class TemplateBind extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--template-bind-text-color, #000);
    }
  `;

  static properties () {
    return{
      prop1: {type: String},
      prop2: {type: String},
      prop3: {type: String},
      prop4: {type: String}
    };
  }

  constructor() {
    super();
    this.prop1 = 'Text binding';
    this.prop2 =  'mydiv';
    this.prop3 =  true;
    this.prop4 =  'pie'
  }

  render() {
    return html`
      <!--Text Binding-->
      <div>${this.prop1}</div>

      <!--Atribute Binding-->
      <div id="${this.prop2}"></div>

      <!--Boolean attribute binding-->
      <div>
          Boolean attribute binding
          <input type="text" ?disabled="${this.prop3}">
      </div>

      <!--Property binding-->
      <div>
      Property binding
      <input type="text" .value="${this.prop4}">
      </div>

      <!--Event handler binding-->
      <div>
      Event handler binding
      <button @click="${this.clickHandler}">Click</button>
      </div>
    `;
  }


  clickHandler(e){
    console.log(e.target);
  }
}
