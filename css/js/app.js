function login(){

window.location.href="dashboard.html";

}

function registrar(){

alert("Usuario registrado correctamente");

window.location.href="index.html";

}

document.addEventListener("DOMContentLoaded", ()=>{

const form = document.getElementById("formCita");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

let nombre =
document.getElementById("nombre").value;

let especialidad =
document.getElementById("especialidad").value;

let fecha =
document.getElementById("fecha").value;

let hora =
document.getElementById("hora").value;

let fila =

`
<tr>

<td>${nombre}</td>

<td>${especialidad}</td>

<td>${fecha}</td>

<td>${hora}</td>

</tr>
`;

document.getElementById("tablaCitas")
.innerHTML += fila;

alert("Cita reservada exitosamente");

form.reset();

});

}

});
