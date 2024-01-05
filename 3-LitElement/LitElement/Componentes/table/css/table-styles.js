import {css } from "lit-element";

export const tableStyles = css`
table{
    border-collapse:collapse;
    border-spacing:0;
    width: 25%;
    background-color: #4fc3f7;
}
/**border-collapse se utiliza para fusionar los bordes. Ésto tiene una gran influencia sobre la presentación y el estilo de las celdas de tabla. La representación de los bordes de tabla es dividida en dos categorías en CSS2 - "fusión" y "separación" (collapsed - separated).*/

th{
    text-align: center;
    padding: 10px;
}

td{
    text-align:center;
    padding:10px;
    font-weight: normal;
}

tr:nth-child(even){
background-color:#b3e5fc;
}
/**selecciona uno o más elementos en función de su posición entre un grupo de hermanos, contando desde el final */
`;