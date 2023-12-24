import { LitElement, html } from 'lit-element';

export class EjercicioDos extends LitElement{

    // DEFINIR PROPIEDADES
    static get properties(){
        return{
            prop1: {type : String},
            prop2: {type : Number},
            prop3: {type : Boolean},
            prop4: {type : Array},
            prop5: {type : Object},
        }
}

    // PARA INICIALIZAR VALORES
constructor(){
    super();
    this.prop1 = 'Hola esto es un string';
    this.prop2 = 10;
    this.prop3 = true;
    this.prop4 = ['Manzana','Naranja','Limon','Sandia'];
    this.prop5 = [{
        marca:'Ford',
        modelo: 'Mustang',
        year: 2023
    },
    {
        marca:'Jeep',
        modelo: 'Compass',
        year: 2014
    },
]

console.log(this.prop5);
}

// render para llamar al template
    render(){
        return html `
        <!--Bindear datos-->
            <p>Estamos en el segundo componente</p>
            <br> ${this.prop1}
            <br> ${this.prop2}
            <br> ${this.prop3}
            <br> ${this.prop4}
            <br> ${this.prop5}

            <!--VALIDAR PROPIEDAD PARA RENDERIZAR DATO
        TERNARIO-->
            ${this.prop3?
            html`<p>Si es TRUE MOSTRARTE</p>`:
            html`DE LO CONTRARIO ES FALSE  SE MUESTRA ESTO`
          }

        <!--CREAR NUEVO ARRAY APARTIR DE LA FUNCION APLICADA A CADA ELEMENTO-->
          <ul>
            ${this.prop4.map(i => html`<li>${i}</li>`)}
          </ul>


          ${this.prop5.map(i => html`<li>${i.marca} ${i.modelo} ${i.year}</li>`)}
        `
    }
}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('ejercicio-dos',EjercicioDos);