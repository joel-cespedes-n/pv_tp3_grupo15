import { useState, useEffect, useRef } from "react";
import proyectoService from "../services/proyectoService.js";
import ProyectoCard from "./ProyectoCard.jsx";
import RegistroActividad from "./RegistroActividad.jsx";
import FormularioProyecto from "./FormularioProyecto.jsx";

function formatearFechaHora(fecha){
    const dia = String (fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const anio = String(fecha.getFullYear());
    const horas = String(fecha.getHours()).padStart(2, "0");
    const minutos = String(fecha.getMinutes()).padStart(2, "0");

    return`Última actualización de la lista: ${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`;
}

const ListaProyectos = () => {
    
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    const [busqueda, setBusqueda] = useState("");

    const[ultimaActualizacion, setUltimaActualizacion] = useState(null);

    const primeraCarga = useRef(true)

    useEffect(() => {
        if (primeraCarga.current) {
            primeraCarga.current = false;
            return;
        }
    const ahora = new Date();
    setUltimaActualizacion(formatearFechaHora(ahora));
    }, [proyectos]);

    const filtrarProyectos = proyectos.filter(p => p.titulo.toLowerCase().includes(busqueda.toLowerCase()));

    const handleAdd = (nuevoProyecto) => {
        const nuevoId =proyectos.length > 0
        ? Math.max(...proyectos.map(p => p.id)) + 1
        : 1;

        const proyectoAgregar = {...nuevoProyecto, id: nuevoId };

        proyectoService.agregarProyecto(proyectoAgregar);
        setProyectos(proyectoService.obtenerProyectos());
     
        const ahora = new Date();
    setUltimaActualizacion(formatearFechaHora(ahora));
    };

    const handleRemove = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
    
    const ahora = new Date();
    setUltimaActualizacion(formatearFechaHora(ahora));
    };

    return (
        <div className="container">
            <h2>Lista de Proyectos</h2>

            <input 
            type="text" 
            placeholder="Buscar proyecto" 
            value={busqueda} 
            onChange={e => setBusqueda(e.target.value)} 
            />

            <FormularioProyecto onAgregar={handleAdd} />

            <div className="lista">
                {filtrarProyectos.map(p => (
                    <ProyectoCard
                     key={p.id}
                     proyecto={p}
                     onEliminar={handleRemove}
                     /*onVerDetalle={handleVerDetalle}*/           
                    />
                ))}
                </div>
                <RegistroActividad fechaHora={ultimaActualizacion}/>
        </div>
    );
};

export default ListaProyectos;