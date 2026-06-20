import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "../styles/dashboard.css";

export default function Advisory() {

const [pregunta,setPregunta]=useState("");

const [respuesta,setRespuesta]=useState("");

const consultar=()=>{

const texto=pregunta.toLowerCase();

if(

texto.includes("estado")

||

texto.includes("finca")

){

setRespuesta(

`Estado general: Bueno.

Activos registrados: 2

No existen alertas críticas.

Todos los animales se encuentran sin novedades.`

)

}

else if(

texto.includes("produccion")

||

texto.includes("leche")

){

setRespuesta(

`La producción actual es de 2450 litros.

Incremento del 15% respecto al mes anterior.`

)

}

else if(

texto.includes("alerta")

){

setRespuesta(

`Alertas recientes:

• Bajo consumo alimento lote 4

• Temperatura alta corral 3

• Revisión sanitaria lote 11`

)

}

else{

setRespuesta(

"Lo siento, aún no entiendo esa consulta."

)

}

}

return(

<>

<Sidebar/>

<Navbar/>

<div className="dashboard">

<h1>ADVISORY GANUS</h1>

<div className="advisory">

<h2>

🤖 Asistente Inteligente

</h2>

<p>

Pregúntame sobre el estado de la finca,

producción o alertas.

</p>

<input

placeholder="Escribe tu consulta..."

value={pregunta}

onChange={(e)=>

setPregunta(e.target.value)

}

/>

<button

className="btnAdvisory"

onClick={consultar}

>

Preguntar

</button>

<div className="quickQuestions">

<button onClick={()=>{

setPregunta("estado de la finca");

setRespuesta(

`Estado general: Bueno.

Todos los animales están estables.`

)

}}>

Estado de la finca

</button>


<button onClick={()=>{

setPregunta("produccion");

setRespuesta(

`Producción actual:

2450 litros.

Incremento del 15%.`

)

}}>

Producción

</button>


<button onClick={()=>{

setPregunta("alertas");

setRespuesta(

`Alertas recientes:

• Bajo consumo alimento lote 4

• Temperatura alta corral 3`

)

}}>

Alertas

</button>

</div>

{

respuesta &&

<div className="mensajeAI">

🤖 {respuesta}

</div>

}

</div>

</div>

</>

)

}