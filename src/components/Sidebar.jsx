import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

import "../styles/sidebar.css";

export default function Sidebar() {

const navigate = useNavigate();

const [abierto,setAbierto]=useState(false);

const logout=()=>{

localStorage.removeItem("usuario");

navigate("/login");

}

return(

<>

{/* BOTON MOVIL */}

<button

className="menuBtn"

onClick={()=>setAbierto(!abierto)}

>

{

abierto

?

<FaTimes/>

:

<FaBars/>

}

</button>

<div

className={

abierto

?

"sidebar abierta"

:

"sidebar"

}

>

<h1 className="logo">

GANUS

</h1>

<nav>

<NavLink

to="/"

onClick={()=>setAbierto(false)}

className={({isActive})=>

isActive

?

"activo"

:

""

}

>

Dashboard

</NavLink>

<NavLink

to="/inventario"

onClick={()=>setAbierto(false)}

className={({isActive})=>

isActive

?

"activo"

:

""

}

>

Inventario

</NavLink>

<NavLink

to="/pesaje"

onClick={()=>setAbierto(false)}

className={({isActive})=>

isActive

?

"activo"

:

""

}

>

Pesaje

</NavLink>

<NavLink

to="/vacunaciones"

onClick={()=>setAbierto(false)}

className={({isActive})=>

isActive

?

"activo"

:

""

}

>

Vacunaciones

</NavLink>

<NavLink

to="/evento"

onClick={()=>setAbierto(false)}

className={({isActive})=>

isActive

?

"activo"

:

""

}

>

Evento Sanitario

</NavLink>

{/*<NavLink

to="/advisory"

onClick={()=>setAbierto(false)}

className={({isActive})=>

isActive

?

"activo"

:

""

}

>

Advisory

</NavLink>
*/}

<button

className="btnLogout"

onClick={logout}

>

Cerrar sesión

</button>

</nav>

</div>

</>

)

}