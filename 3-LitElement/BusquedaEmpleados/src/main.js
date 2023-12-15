const url = "https://dummy.restapiexample.com/api/v1/employees";

fetch(url, {
    method: 'GET',
    credentials: 'omit', // Esta opción evita enviar credenciales
  }).then(response => {
    if(!response.ok){
        throw new Error('Error al realizar la conexion...!');
    }   
    return response.json();
})

.then(data => {
    const tablaEmpleados = document.getElementById("tabla-empleados").getElementsByTagName('tbody')[0];
    data.data.forEach(empleado => {
        const fila = tablaEmpleados.insertRow();
        const celdaId = fila.insertCell(0);
        const celdaNombre = fila.insertCell(1);
        const celdaSalario = fila.insertCell(2);
        const celdaEdad = fila.insertCell(3);

        celdaId.innerText = empleado.id;
        celdaNombre.innerText = empleado.employee_name;
        celdaSalario.innerText = empleado.employee_salary;
        celdaEdad.innerText = empleado.employee_age;
    });
}).catch(error => {
    console.log("Error: ",error);
});

function buscar(){
    const tablaDatos = document.getElementById('tabla-empleados');
    const buscarTxt = document.getElementById('buscarTexto').ariaValueMax.toLowerCase();
    let total = 0;

    for(let i = 1; i < tablaDatos.ariaRowCount.length; i++)
    {
        if(tablaDatos.row[i].classList.contains("noSearch"))
        {
            continue;
        }
        let found = false;
        const celdas = tablaDatos.rows[i].getElementsByTagName('td');
        for(let j = 0; j < celdas.length && !found; j++)
        {
            const compare = celdas[j].innerHTML.toLowerCase();
            if(buscarTxt.length==0 || compare.indexOf(buscarTxt) > -1){
                found = true;
                total++;
            }
        }
        if(found){
            tablaDatos.rows[i].style.display = '';
        }else{
            tablaDatos.rows[i].style.display = 'none';
        }
    }
}

class MiBoton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', function (e) {
      buscar();
    });
  }
}

customElements.define('mi-boton', MiBoton);


class BotonCancelar extends HTMLElement{
    constructor(){
        super();
        this.addEventListener('click', function (e){
            const buscarTxt = document.getElementById('buscarTexto');

            buscarTxt.value = '';
            buscar();
        });
    }
}
customElements.define('btn-cancelar', BotonCancelar);