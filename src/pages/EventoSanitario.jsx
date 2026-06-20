import { useEffect,useState } from "react";

import Sidebar from "../components/Sidebar";

import api from "../services/api";

import "../styles/eventoSanitario.css";

export default function EventoSanitario(){

const [formulario,setFormulario]=useState({

animal_id:1,

tipo:"",

descripcion:"",

fecha:"",

veterinario:"",

estado:"Activo"

});

const [eventos,setEventos]=useState([]);

const cargarEventos = async()=>{

try{

const respuesta = await api.get(
"/evento-sanitario"
);

setEventos(
respuesta.data
);

}

catch(error){

console.log(error);

}

}

useEffect(()=>{

const obtenerEventos = async () => {
try{
await cargarEventos();
}
catch(error){
console.log(error);
}
};

obtenerEventos();

},[]);

const cambiar=(e)=>{

setFormulario({

...formulario,

[e.target.name]:e.target.value

});

};


const guardar=async()=>{

try{

await api.post(

"/evento-sanitario",

formulario

);

alert(

"Evento sanitario registrado"

);

cargarEventos();

setFormulario({

animal_id:1,

tipo:"",

descripcion:"",

fecha:"",

veterinario:"",

estado:"Activo"

});

}

catch(error){

console.log(error);

alert(

"Error al guardar"

);

}

};


return(

<>

<Sidebar/>

<div className="eventoSanitario">


<h1>

Evento Sanitario

</h1>

<p className="subtitulo">

Registro y seguimiento sanitario del ganado.

</p>


<div className="eventoTop">


<div className="formularioEvento">


<select

name="animal_id"

value={formulario.animal_id}

onChange={cambiar}

>

<option value="1">

La Negra

</option>

<option value="2">

Toro Bravo

</option>

</select>


<select

name="tipo"

value={formulario.tipo}

onChange={cambiar}

>

<option value="">

Seleccione el tipo

</option>

<option value="Enfermedad">

Enfermedad

</option>

<option value="Tratamiento">

Tratamiento

</option>

<option value="Desparasitación">

Desparasitación

</option>

<option value="Emergencia">

Emergencia

</option>

<option value="Revision">

Revisión veterinaria

</option>

</select>


<input

type="date"

name="fecha"

value={formulario.fecha}

onChange={cambiar}

/>


<input

name="veterinario"

placeholder="Veterinario"

value={formulario.veterinario}

onChange={cambiar}

/>


<select

name="estado"

value={formulario.estado}

onChange={cambiar}

>

<option>

Activo

</option>

<option>

Seguimiento

</option>

<option>

Resuelto

</option>

</select>


<textarea

name="descripcion"

placeholder="Descripción"

value={formulario.descripcion}

onChange={cambiar}

/>


<button

className="btnGuardar"

onClick={guardar}

>

Guardar Evento

</button>

</div>


<div className="resumenEvento">

<h2>

Resumen

</h2>


<div className="dato">

<span>

Eventos activos

</span>

<h3>

7

</h3>

</div>


<div className="dato">

<span>

En seguimiento

</span>

<h3 className="amarillo">

3

</h3>

</div>


<div className="dato">

<span>

Resueltos

</span>

<h3 className="verde">

18

</h3>

</div>

</div>

</div>


<h2 className="tituloTabla">

Historial

</h2>


<div className="tablaEventos">

<table>

<thead>

<tr>

<th>

Animal

</th>

<th>

Tipo

</th>

<th>

Fecha

</th>

<th>

Veterinario

</th>

<th>

Estado

</th>

</tr>

</thead>


<tbody>

{

eventos.map((evento)=>(

<tr key={evento.id}>

<td>

{evento.nombre}

</td>

<td>

{evento.tipo}

</td>

<td>

{evento.fecha.split("T")[0]}

</td>

<td>

{evento.veterinario}

</td>

<td>

{evento.estado}

</td>

</tr>

))

}

</tbody>

</table>

</div>

</div>

</>

)

}