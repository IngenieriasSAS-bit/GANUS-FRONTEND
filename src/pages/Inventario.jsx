import { useEffect, useState } from "react";

import api from "../services/api";

import Sidebar from "../components/Sidebar";

import NuevoAnimal from "../components/NuevoAnimal";

import {

FaSearch,

FaPlus,

FaEye,

FaEdit

}

from "react-icons/fa";

import "../styles/inventario.css";


export default function Inventario() {

    const [activos, setActivos] = useState([]);

    const [busqueda, setBusqueda] = useState("");

    const [mostrarModal, setMostrarModal] = useState(false);
    

    useEffect(() => {

        api.get("/activos")

            .then((respuesta) => {

                setActivos(respuesta.data);

            })

            .catch((error) => {

                console.log(error);

            });

    }, []);


    const activosFiltrados = activos.filter((animal) =>

        animal.rfid

            .toString()

            .toLowerCase()

            .includes(

                busqueda.toLowerCase()

            )

    );


    return (

        <>

            <Sidebar />

            <div className="inventario">

                <h1>

                    Inventario GANUS

                </h1>

                <p>

                    Fuente única de verdad del negocio.

                </p>


                <div className="accionesInventario">


                    <div className="buscador">

                        <FaSearch />

                        <input

                            type="text"

                            placeholder="Buscar por RFID"

                            value={busqueda}

                            onChange={(e) =>

                                setBusqueda(e.target.value)

                            }

                        />

                    </div>


                    <button

className="btnNuevo"

onClick={() => setMostrarModal(true)}

>

<FaPlus />

Nuevo Animal

</button>

{

mostrarModal && (

<NuevoAnimal

cerrar={() =>

setMostrarModal(false)

}

actualizar={() =>

window.location.reload()

}

/>

)

}

                </div>


                <div className="tablaContainer">

               <table>
               
                    <thead>

                        <tr>

                            <th>Código</th>

                            <th>Nombre</th>

                            <th>RFID</th>

                            <th>Sexo</th>

                            <th>Raza</th>

                            <th>Peso</th>

                            <th>Estado</th>

                            <th>Acciones</th>

                        </tr>

                    </thead>


                    <tbody>

                        {

                            activosFiltrados.map((animal) => (

                                <tr key={animal.id}>


                                    <td>

                                        {animal.codigo}

                                    </td>


                                    <td>

                                        {animal.nombre}

                                    </td>


                                    <td>

                                        {animal.rfid}

                                    </td>


                                    <td>

                                        {animal.sexo}

                                    </td>


                                    <td>

                                        {animal.raza}

                                    </td>


                                    <td>

                                        {animal.peso} Kg

                                    </td>


                                    <td>

                                        <span className="estado">

                                            {animal.estado}

                                        </span>

                                    </td>


                                    <td>


                                        <button className="icono">

                                            <FaEye />

                                        </button>


                                        <button

                                            className="icono editar"

                                        >

                                            <FaEdit />

                                        </button>


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
