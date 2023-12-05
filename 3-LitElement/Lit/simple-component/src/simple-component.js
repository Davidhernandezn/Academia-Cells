import { LitElement,css, html } from 'lit';
import {range} from 'lit/directives/range.js'
import {map} from 'lit/directives/map.js';

export class SimpleComponent extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      display:block;
      width:400px;
      heigth:400px;
    }
    #board{
      display:grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(8, 1fr);
      border: 2px solid #404040;
      box-sizing: border-box;
      height: 100%;
    }
    #board > div {
      padding: 2px;
    }
    .black {
      color: #ddd;
      background: black;
    }
    .white {
      color: gray;
      background: white;
    }
  `;

  static properties = {
    holamundo: {type:String},
  
    items: {state: true},
    names: {state: true},

    friends:{state:true},
    pets: {state:true},
    includePets:{state:true},

    things: {state:true},
  };

  _deleteThing(index){
    this.things = this.things.filter((_,i) => i !== index);
  }

  constructor() {
    super();
    // Declare reactive properties
    this.holamundo = 'Aprendiendo lit element - David Hernandez';
    this.items = new Set(['Apple', 'Banana', 'Grape', 'Orange', 'Lime']);
    this.names = ['Chandler', 'Phoebe', 'Joey', 'Monica', 'Rachel', 'Ross'];
   
    this.friends = ['Harry', 'Ron', 'Hermione'];
    this.pets = [
      {name: 'HeadWig', species:'Owl'},
      {name:'Scabbers', species:'Rat'},
      {name: 'Crookshanks', species:'Cat'},
    ];
    this.includePets = true;

    this.things = ['Raindrops on roses',
    'Whiskers on kittens','Bright copper kettles',
    'Warm woolen mittens', ];

  }

  //Manejo de eventos en listas
  render() {
    return html`
      <p>A few of my favorite things</p>
      <ul>
        ${map(
          this.things,
          (thing, index) => html`
            <li>
              ${thing}
               <button @click=${() => this._deleteThing(index)}>Delete</button>
            </li>
          `
        )}
      </ul>
    `;
  }
}


  //directiva range y generacion de tablero dinamico 8x8
  /**
  render() {
    return html`
      <p>Let's play a game!</p>
      <div id="board">
        ${map(range(8), (row) => map(range(8), (col) => html`
          <div class="${getColor(row, col)}">${getLabel(row, col)}</div>
        `))}
      </div>
    `;
  }
}**/
  //Agregar nuevos items en el mismo array, evento show y hide
  /**
  render() {
    const listItems = [];
    // TODO: populate templates with items to render.
    this.friends.forEach((friend) => {
      listItems.push(html`<li>${friend}</li>`);
    });
    if (this.includePets) {
      this.pets.forEach((pet) => {
        listItems.push(html`<li>${pet.name} (${pet.species})</li>`);
      });
    }
    return html`
      <button @click=${() => this._togglePetVisibility()}>
        ${this.includePets ? 'Hide' : 'Show'} pets
      </button>
      <p>My magical friends</p>
      <ul>
        ${listItems}
      </ul>
    `;
  }

  _togglePetVisibility() {
    this.includePets = !this.includePets;
  }
}
**/
  //FILTRO Y GENERAR MATRIZ
  /**
  render() {
    return html`
      <p>A list of names that include the letter "e"</p>
      <ul>
        ${this.names
        .filter((name) => name.match(/e/i)) //filtra solo los que tengan letra e
        //genera matriz
        .map((name) => html`<li>${name}</li>`)} 
      </ul>
    `;
  }
}**/
  //ITERAR LISTA CON MAP
  /**
  render() {
    return html`
      <p>My unique fruits</p>
      <ul>
        ${map(this.items, (item) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}**/
//LISTAS
  /**
  render() {
        return html`
          <h1>Rendering lists with Lit</h1>
          <p>Lit has built-in support for any iterables!</p>
          <h2>Array</h2>
          <p>
            ${['✨', '🔥', '❤️']}
          </p>
          <h2>Set</h2>
          <p>
            ${new Set(['A', 'B', 'C'])}
          </p>
          <h2>Generator</h2>
          <p>
            ${(function* () {
              for (let i = 1; i < 4; i++) yield i;
            })()}
          </p>
        `;
  }**/

customElements.define('simple-component', SimpleComponent);

//Directiva Range
//const getColor = (row, col) => ((row + col) % 2 ? 'white' : 'black');
//const getLabel = (row, col) => `${String.fromCharCode(65 + col)}${8 - row}`;


//yield  pausar y reanudar una función generadora