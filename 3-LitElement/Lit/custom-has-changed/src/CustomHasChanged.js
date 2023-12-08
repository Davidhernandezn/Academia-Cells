import { html, css, LitElement } from 'lit';

export class CustomHasChanged extends LitElement {
  static get properties() {
    return {
      myProp: {
        type: Number,
        /*COMPARE MYPROP´S NEW VALUE WITH ITS OLD VALUE 
         * ONLY CONSIDER MYPROP TO HAVE CHANGED IF NEWVAL IS LARGER THAN OLD VAL
        */
          hasChanged(newVal, oldVal) {
            if(newVal > oldVal){
              console.log(`${newVal} > ${oldVal}. hasChanged: true.`);
              return true;
            }
            else{
              console.log(`${newVal} <= ${oldVal}. hasChanged: false.`);
              return false;
            }
          }
        }};
  }

  constructor() {
    super();
    this.myProp = 1;
  }

  render() {
    return html`
      <p> myProp: ${this.myProp}</p>
      <button @click="${this.getNewVal}">get new value</button>
    `;
  }
  
  updated() {
  console.log('myProp updated');
  }
  
  getNewVal() {
    let newVal = Math.floor(Math.random() * 10);
    this.myProp = newVal;
  }
}
