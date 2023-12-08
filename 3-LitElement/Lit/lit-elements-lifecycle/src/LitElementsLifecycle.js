import { html, css, LitElement } from 'lit';

export class LitElementsLifecycle extends LitElement {

  constructor() {
    super();
    this.title = 'No title';
    this.icon = 'undefined';
  }

 static get properties(){
  return{
    title : {type: String},
    icon : {type: String}
  };
  }

  render() {
    return html`
    <h1>Title is: ${this.title}</h1>
    <h3>Icon is: ${this.icon}</h3>
    `;
  }

  //private method
  //Don't use. Don't override.
  //Showing  here just for educational purposes only
  _enqueueUpdate(){
    console.log('_enquenueUpdate called');
    const result = super._enqueueUpdate();
    console.log('_enquenueUpdate returns '+result);
    return result;
  }
}
