import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import api from "../services/api";

import "../styles/dashboard.css";

import Navbar from "../components/Navbar";

import GraficaVacunas from "../components/GraficaVacunas";

import GraficaPesajes from "../components/GraficaPesajes";

import GraficaDistribucion from "../components/GraficaDistribucion";

import { FaWeightHanging } from "react-icons/fa";

import { FaSyringe } from "react-icons/fa";

import { FaTools } from "react-icons/fa";

import { GiMilkCarton } from "react-icons/gi";

import { GiCow } from "react-icons/gi";

import { FaHeartBroken } from "react-icons/fa";

import { FaExclamationTriangle } from "react-icons/fa";

import { FaTemperatureHigh } from "react-icons/fa";

import { FaHeartbeat } from "react-icons/fa";

export default function Dashboard(){

const [pregunta,setPregunta]=useState("");

const [respuestaAI,setRespuestaAI]=useState("");

const [estadisticas,setEstadisticas]=useState({

activos:0,

pesajes:0,

vacunaciones:0,

eventos:0

});

const [actividades,setActividades]=useState([]);

useEffect(()=>{
  let mounted = true;

  const cargarEstadisticas = async () => {
    try {
      const respuesta = await api.get("/estadisticas");
      const actividadesRespuesta = await api.get("/actividades-recientes");
      if (mounted) {
        setEstadisticas(respuesta.data);
        setActividades(actividadesRespuesta.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  cargarEstadisticas();

  return () => {
    mounted = false;
  };
},[]);

const consultarAI=()=>{

const texto=pregunta.toLowerCase();

if(

texto.includes("animal")

){

setRespuestaAI(

`Actualmente tienes ${estadisticas.activos} animales registrados.`

);

}

else if(

texto.includes("pesaje")

){

setRespuestaAI(

`Se han realizado ${estadisticas.pesajes} pesajes.`

);

}

else if(

texto.includes("vacuna")

){

setRespuestaAI(

`Hay ${estadisticas.vacunaciones} vacunaciones registradas.`

);

}

else if(

texto.includes("evento")

||

texto.includes("sanitario")

){

setRespuestaAI(

`Se registraron ${estadisticas.eventos} eventos sanitarios.`

);

}

else{

setRespuestaAI(

"Lo siento, aún no entiendo esa consulta."

);

}

}



return(

<>

<Sidebar/>

<Navbar/>

<div className="dashboard">

<h1>

Dashboard GANUS

</h1>


<div className="dashboard-top">


<div className="cards">


<div className="card">

<h3>Activos Totales</h3>

<h2>{estadisticas.activos}</h2>

<p>+12% vs mes anterior</p>

</div>


<div className="card">

<h3>Pesajes</h3>

<h2>{estadisticas.pesajes}</h2>

<div>

<p>Registros realizados</p>

<p>+8% vs ayer</p>

</div>

</div>


<div className="card alerta">

<h3>

Vacunaciones

</h3>

<h2>

{estadisticas.vacunaciones}

</h2>

<p>

Aplicadas

</p>

<p>3 críticas</p>

</div>


<div className="card">

<h3>

Eventos Sanitarios

</h3>

<h2>

{estadisticas.eventos}

</h2>

<p>

Registrados

</p>

<p>6 próximas</p>

</div>

</div>


<div className="advisory">

<h2>

ADVISORY GANUS

</h2>

<div className="advisoryIcon">

<img

src="/images/robot-ai.png"

alt="AI GANUS"

/>

</div>

<p className="saludoAI">

Hola {localStorage.getItem("usuario") || "Invitado"}

</p>

{/*
<button

className="btnAdvisory"

onClick={()=>setMostrarAI(!mostrarAI)}

>

{

mostrarAI

?

"Ocultar Advisory"

:

"Consultar Advisory"

}

</button> */}

<>

<p>

Actualmente tienes

<b>

 {" "}

{estadisticas.activos}

{" "}

</b>

animales registrados.

</p>

<p>

Se han realizado

<b>

 {" "}

{estadisticas.pesajes}

{" "}

</b>

pesajes.

</p>

<p>

Hay

<b>

 {" "}

{estadisticas.vacunaciones}

{" "}

</b>

vacunaciones registradas.

</p>

<p>

Se detectaron

<b>

 {" "}

{estadisticas.eventos}

{" "}

</b>

eventos sanitarios.

</p>

<div className="mensajeAI">

{

estadisticas.eventos>0

?

"⚠️ Existen eventos sanitarios pendientes."

:

"✅ Todos los animales se encuentran sin novedades."

}

</div>

</>

<>

<input

placeholder="Escribe tu consulta..."

value={pregunta}

onChange={(e)=>

setPregunta(e.target.value)

}

/>

<button

className="btnAdvisory"

onClick={consultarAI}

>

Preguntar

</button>

{

respuestaAI && (

<div className="mensajeAI">

🤖 {respuestaAI}

</div>

)

}

</>

</div>

</div>



<h2 className="subtitulo">

INDICADORES CLAVE

</h2>

<div className="kpi-grid">

    <div className="kpi-card">

        <div className="kpi-header">

            <h4>Producción de leche</h4>

            <GiMilkCarton className="kpi-icon"/>

        </div>

        <h2>2450 L</h2>

        <p>+15% vs mes anterior</p>

    </div>


<div className="kpi-card">

        <div className="kpi-header">

            <h4>Peso promedio</h4>

            <FaWeightHanging className="kpi-icon"/>

        </div>

        <h2>412 Kg</h2>

        <p>+9%</p>

    </div>


  <div className="kpi-card">

        <div className="kpi-header">

            <h4>Tasa de preñez</h4>

            <GiCow className="kpi-icon"/>

        </div>

        <h2>68%</h2>

        <p>+6%</p>

    </div>


<div className="kpi-card">

        <div className="kpi-header">

            <h4>Mortalidad</h4>

            <FaHeartBroken className="kpi-icon"/>

        </div>

        <h2>1.2%</h2>

        <p>-0.5%</p>

    </div>

</div>

<div className="graficas">

<GraficaVacunas/>

<GraficaPesajes/>

</div>

<div className="bottom">

<GraficaDistribucion/>

<div className="listas">

<div className="actividad">

<h2>

Actividades recientes

</h2>

<ul>

{

actividades.map((item,index)=>(

<li key={index}>

{

item.tipo==="Vacunación"

?

<FaSyringe className="itemIcon verde"/>

:

item.tipo==="Pesaje"

?

<FaWeightHanging className="itemIcon verde"/>

:

<FaTools className="itemIcon naranja"/>

}

<span>

{item.tipo}: {item.descripcion}

</span>

</li>

))

}

</ul>

</div>

<div className="alertas">

<h2>

Alertas recientes

</h2>

<ul>

<li>

<FaExclamationTriangle className="itemIcon rojo"/>

<span>Bajo consumo alimento lote 4</span>

</li>

<li>

<FaTemperatureHigh className="itemIcon naranja"/>

<span>Temperatura alta corral 3</span>

</li>

<li>

<FaHeartbeat className="itemIcon rojo"/>

<span>Revisión sanitaria lote 11</span>

</li>

</ul>

</div>

</div>

</div>

</div>

</>

) 

}            