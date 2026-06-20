import "./Navbar.css";

export default function Navbar() {

return (

<div className="navbar">

<div className="navbarLogo">

GANUS

</div>

<div className="navbarBusqueda">

<input

type="text"

placeholder="Buscar..."

/>

</div>

<div className="navbarDerecha">

<div className="iconoNav">

<svg

xmlns="http://www.w3.org/2000/svg"

width="22"

height="22"

fill="none"

stroke="currentColor"

strokeWidth="2"

viewBox="0 0 24 24"

>

<circle cx="11" cy="11" r="8"/>

<path d="m21 21-4.3-4.3"/>

</svg>

</div>



<div className="iconoNav">

<svg

xmlns="http://www.w3.org/2000/svg"

width="22"

height="22"

fill="none"

stroke="currentColor"

strokeWidth="2"

viewBox="0 0 24 24"

>

<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>

<path d="M13.73 21a2 2 0 0 1-3.46 0"/>

</svg>

</div>

<div className="usuario">

S

</div>

<span>

{localStorage.getItem("usuario") || "Invitado"}

</span>

</div>

</div>

)

}