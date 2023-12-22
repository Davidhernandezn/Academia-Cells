var personArr = [
    {
        "personId":123,
        "name": "Jhon",
        "city": "Melburne",
        "phoneNo": "1234567890"
    },
    {
        "personId":124,
        "name": "Amelia",
        "city": "Sydney",
        "phoneNo": "1234567890"
    },
    {
        "personId":125,
        "name": "Emily",
        "city": "Perth",
        "phoneNo": "1234567890"
    },
    {
        "personId":126,
        "name": "Abraham",
        "city": "Perth",
        "phoneNo": "1234567890"
    }
]

var tablaDatos = document.getElementById("tablaPersonas");

var contenidoTabla =`<tr>
<th>Id</th>
<th>Nombre</th>
<th>Ciudad</th>
<th>Telefono</th>
</tr>`;

personArr.forEach(function(persona){
    contenidoTabla += "<tr><td>" + persona.personId + "</td><td>" + persona.name + "</td><td>" + persona.city + "</td><td>" + persona.phoneNo + "</td></tr>";
})

tablaDatos.innerHTML = contenidoTabla;