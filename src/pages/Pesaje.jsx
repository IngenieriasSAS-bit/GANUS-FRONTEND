import { useState } from "react";

import Sidebar from "../components/Sidebar";

import api from "../services/api";

import "../styles/pesaje.css";

export default function Pesaje() {
const [historial,setHistorial]=useState([

{

fecha:"15/06/2026",

peso:"420",

variacion:"+15 Kg",

condicion:"Buena",

observaciones:"Sin novedades"

},

{

fecha:"10/05/2026",

peso:"405",

variacion:"+10 Kg",

condicion:"Buena",

observaciones:"Alimentación normal"

}

]);

const [formulario,setFormulario]=useState({

animal_id:1,

peso:"",

condicion_corporal:"",

fecha:"",

observaciones:""

});

const cambiar=(e)=>{

setFormulario({

...formulario,

[e.target.name]:

e.target.value

});

};

const guardar=async()=>{

try{

await api.post(

"/pesajes",

formulario

);

alert(

"Pesaje registrado correctamente"

);

setHistorial([

{

fecha:formulario.fecha,

peso:formulario.peso,

variacion:"+0 Kg",

condicion:formulario.condicion_corporal,

observaciones:formulario.observaciones

},

...historial

]);

setFormulario({

animal_id:1,

peso:"",

condicion_corporal:"",

fecha:"",

observaciones:""

});

}

catch(error){

console.log(error);

console.log(error.response);

console.log(error.response?.data);

alert(

JSON.stringify(

error.response?.data ||

error.message

)

);

}
};

return(

<>

<Sidebar/>

<div className="pesaje">

<h1>

Registro de Pesaje

</h1>

<p className="subtitulo">

Control y seguimiento del peso de los animales.

</p>

<div className="pesajeTop">

<div className="formularioPesaje">

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


<input

name="peso"

placeholder="Peso (Kg)"

value={formulario.peso}

onChange={cambiar}

/>


<input

name="condicion_corporal"

placeholder="Condición corporal"

value={formulario.condicion_corporal}

onChange={cambiar}

/>


<input

type="date"

name="fecha"

value={formulario.fecha}

onChange={cambiar}

/>


<textarea

name="observaciones"

placeholder="Observaciones"

value={formulario.observaciones}

onChange={cambiar}

/>


<button

className="btnGuardar"

onClick={guardar}

>

Guardar Pesaje

</button>

</div>


<div className="resumen">

<h2>

Resumen

</h2>

<div className="dato">

<span>Último peso</span>

<h3>420 Kg</h3>

</div>

<div className="dato">

<span>Variación</span>

<h3 className="verde">

+15 Kg

</h3>

</div>

<div className="dato">

<span>Fecha último pesaje</span>

<h3>

15/06/2026

</h3>

</div>

<div className="dato">

<span>Estado</span>

<h3>

Estable

</h3>

</div>

</div>

</div>


<h2 className="tituloTabla">

Historial de Pesajes

</h2>

<div className="tablaPesajes">

<table>

<thead>

<tr>

<th>Fecha</th>

<th>Peso</th>

<th>Variación</th>

<th>Condición</th>

<th>Observaciones</th>

</tr>

</thead>

<tbody>

{

historial.map((item,index)=>(

<tr key={index}>

<td>

{item.fecha}

</td>

<td>

{item.peso} Kg

</td>

<td className="verde">

{item.variacion}

</td>

<td>

{item.condicion}

</td>

<td>

{item.observaciones}

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