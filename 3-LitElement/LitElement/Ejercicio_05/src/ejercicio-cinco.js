import { LitElement, html } from 'lit-element';

export class EjercicioCinco extends LitElement{
// DEFINIR PROPIEDADES
    static get properties(){
    return{
        article:{type: Object},
        prop1: {type: String},
        prop2: {type: String},
    }  
}

// PARA INICIALIZAR PROPIEDADES
constructor(){
    super();
    this.article = {
        title: 'Blog de  México',
        text: 'Peña Bernal'
    };
    this.prop1 ='Funcion uno';
    this.prop2 ='Plantilla secundaria';
  }

// render para llamar al template
    render(){
        return html `
        <h1>Quinto componente</h1>

        <!--LLAMAR FUNCION-->
        ${this.showTextOne()}
        <hr>
        ${this.showTextTwo()}
     
        `
    }

  //FUNCIONES DESPUES DEL RENDER
    showTextOne(){
        //PARA TOMARLO COMO UN HTML LITERAL
        return html`
        <h3>${this.article.title}</h3>
        <p>${this.article.text}</p>`
    }

    showTextTwo(){
        return html`
        <p>${this.prop1}</p>
        <p>${this.prop2}</p>
        `
    }
}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('ejercicio-cinco',EjercicioCinco);