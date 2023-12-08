import { html, css, LitElement } from 'lit';

export class ObserverAttribute extends LitElement {

  static get properties(){ return{
    myProp: { attribute:true },
    theProp: { attribute:false },
    otherProp: {attribute: 'other-prop' },
  };}

  constructor() {
    super();
    this.myProp = 'myProp';
    this.theProp = 'theProp';
    this.otherProp = 'otherProp';
  }

  attributeChangedCallback(name, oldval, newval){
    console.log('attribute change:', name, newval);
    super.attributeChangedCallback(name, oldval, newval);
  }

  render() {
    return html`
      <p>myProp ${this.myProp}</p>
      <p>theProp ${this.theProp}</p>
      <p>otherProp ${this.otherProp}</p>
      <button @click="${this.changeAttributes}">Change attributess</button> 
    `;
  }

  changeAttributes(){
    let randomString = Math.floor(Math.random()*100).toString();
    this.setAttribute('myProp','myProp '+randomString);
    this.setAttribute('theprop', 'theProp '+randomString);
    this.setAttribute('other-prop', 'otherProp ' +randomString);
    this.requestUpdate();
  }

  updated(changedProperties){
    changedProperties.forEach((oldvalue, propName) =>{
      console.log(`${propName} changed. oldvalue: ${oldvalue}`);
    });
  }
}
