import { LitElement, html, css } from 'lit-element';
import { tableStyles } from '../css/table-styles';
import { generalStyles } from '../css/general-styles';
export class TableComponent extends LitElement{
    static get styles(){
    //IMPORTAMOS MODULOS CSS
    return[
        tableStyles,
        generalStyles
    ]
}

// DEFINIR PROPIEDADES
    static get properties(){
    return{
        headBoard:{type : Array},
        list: {type : Array}
    }  
}

// PARA INICIALIZAR PROPIEDADES
constructor(){
    super();

    this.headBoard = [
        {title: "NOMBRE"},
        {title: "APELLIDO"},
        {title: "POINTS"}
    ];

    this.list = [
        {id: "50", name:"Loki", lastName:"Oasis", points: "345"},
        {id: "50", name:"Hela", lastName:"P5f hs", points: "445"},
        {id: "50", name:"Thor", lastName:"Oa sds", points: "945"}
    ]
  }

// render para llamar al template
    render(){
        return html `
        <table>
            <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Points</th>
            </tr>
            <tr>
                <td>Rosa</td>
                <td>Juarez</td>
                <td>75</td>
            </tr>
            <tr>
                <td>Maria</td>
                <td>Peña</td>
                <td>65</td>
            </tr>
            <tr>
                <td>Liz</td>
                <td>Oras</td>
                <td>95</td>
            </tr>
        </table>
        <br>
        <br>
    
        <table>
            <tr>
                ${this.headBoard.map(i => html`
                <th>${i.title}</th>
                `
                )}
            </tr>
            
                ${this.list.map(d => html`
                <tr>
                <td> ${d.name} </td>
                <td> ${d.lastName} </td>
                <td> ${d.points} </td>
                </tr>
                `)}
            
        </table>
        `
    }


}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('table-lit',TableComponent);