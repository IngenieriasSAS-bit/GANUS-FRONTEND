import { useState } from "react";

import api from "../services/api";


export default function NuevoAnimal({

cerrar,

actualizar

}){


const [formulario,setFormulario]=useState({

codigo:"",

nombre:"",

rfid:"",

sexo:"",

raza:"",

peso:"",

estado:"Activo"

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

"/activos",

formulario

);


alert(

"Animal registrado"

);


actualizar();

cerrar();

}

catch(error){

console.log(error);

}

};


return(

<div className="overlay">


<div className="modal">


<h2>

Registrar Animal

</h2>


<input

name="codigo"

placeholder="Código"

onChange={cambiar}

/>


<input

name="nombre"

placeholder="Nombre"

onChange={cambiar}

/>


<input

name="rfid"

placeholder="RFID"

onChange={cambiar}

/>


<select

name="sexo"

onChange={cambiar}

>

<option>

Sexo

</option>

<option>

Macho

</option>

<option>

Hembra

</option>

</select>


<input

name="raza"

placeholder="Raza"

onChange={cambiar}

/>


<input

name="peso"

placeholder="Peso"

onChange={cambiar}

/>


<button

onClick={guardar}

className="btnGuardar"

>

Guardar

</button>


<button

onClick={cerrar}

className="btnCancelar"

>

Cancelar

</button>


</div>


</div>

)

}