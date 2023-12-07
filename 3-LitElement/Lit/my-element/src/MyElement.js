import { html, css, LitElement } from 'lit';

export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--my-element-text-color, #000);
    }
  `;

  static get properties() {
    //DECLARACION
    return{
      prop1: {type: String, reflect:true},
      prop2: {type: Number, reflect:true},
      prop3: {type: Boolean, reflect:true},
      prop4: {type: Array, reflect:true},
      prop5: {type: Object, reflect:true}
    };
  }

  //INICIALIZACION
  constructor() {
    super();
    this.prop1 = '';
    this.prop2 = 0;
    this.prop3 = false;
    this.prop4 = [];
    this.prop5 = { };
  }

  
  render() {
    return html`
      <p>prop1 ${this.prop1}</p>
      <p>prop2 ${this.prop2}</p>
      <p>prop3 ${this.prop3}</p>

      <p>prop4: ${this.prop4.map((item, index) => 
        html`<span>[${index}]:${item}&nbsp;</span>`)}</p>

      <p>prop5:
        ${Object.keys(this.prop5).map(item =>
          html`<span>${item}: ${this.prop5[item]}&nbsp;</span>`)}
      </p>

      <button @click="${this.changeProperties}">Change properties</button>
      <button @click="${this.changeAttributes}">Change attributes</button>

    `;
  }

  changeAttributes(){
    let randy = Math.floor(Math.random()*10);
    let myBool = this.getAttribute(this.prop3);

    this.setAttribute('prop1', randy.toString());
    this.setAttribute('prop2', randy.toString());
    this.setAttribute('prop3', myBool? '':null);
    this.setAttribute('prop4', JSON.stringify([...this.prop4, randy]));
    this.setAttribute('prop5', JSON.stringify(Object.assign({}, this.prop5, {[randy]: randy})));
    //THE REQUESTUPDATE OF LIFECYCLE OF LITELEMENT
    //SOLICITAR UNA ACTUALIZACIÓN QUE SE PROCESA DE FORMA ASINCRONICA
    this.requestUpdate();
    //-EXPORT ABSTRACT CLASS UPDATINGELEMENT EXTENDS HTMLELEMENT
  }

  changeProperties(){
     let randy = Math.floor(Math.random()*10);
     let myBool = this.prop3;

     this.prop1 = randy.toString();
     this.prop2 = randy;
     this.prop3 = !myBool;
     this.prop4 = [...this.prop4, randy];
     this.prop5 = Object.assign({}, this.prop5, {[randy]:randy});
  }

  //DEFAULT LIFECYCLE CALLBACKS FROM THE WEB COMPONENT
  attributeChangedCallback(name, oldVal, newVal){
    console.log('attribute change: ', name, newVal);
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  //THE UPDATE OF LIFECYCLE OF LITELEMENT
   //CHANGE PROPERTIES MAP-KEYS ARE THE NAMES OF  CHANGED PRPERTIES;
   // VALUES ARE THE CORRESPONDING PREVIUS VALUES
  
   updated(changeProperties){
    changeProperties.forEach((oldValue, propName) => {
      console.log(`${propName} change. oldValue: ${oldValue}`);
    });
   }
  }
