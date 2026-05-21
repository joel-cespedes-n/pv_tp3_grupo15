import { useState } from "react";
import proyectoService from "../services/proyectoService.js";
import ProyectoCard from "./ProyectoCard.jsx";
import DetalleProyecto from "./DetalleProyecto.jsx";
import RegistroActividad from "./RegistroActividad.jsx";
import FormularioProyecto from "./FormularioProyecto.jsx";

const ListaProyectos = () => {
    
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    const [busqueda, setBusqueda] = useState("");
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

    const[ultimaActualizacion, setUltimaActualizacion] = useState(null);

    const filtrarProyectos = proyectos.filter(p => p.titulo.toLowerCase().includes(busqueda.toLowerCase()));

    const handleAdd = (nuevoProyecto) => {
        const nuevoId =proyectos.length > 0
        ? Math.max(...proyectos.map(p => p.id)) + 1
        : 1;

        const proyectoAgregar = {...nuevoProyecto, id: nuevoId };

        proyectoService.agregarProyecto(proyectoAgregar);
        setProyectos(proyectoService.obtenerProyectos());
     
        const ahora = new Date();
    setUltimaActualizacion(
        `${ahora.getDate()}/${ahora.getMonth() + 1}/${ahora.getFullYear()} a las ${ahora.getHours()}:${ahora.getMinutes()} hs.`
      );
    };
    const handleRemove = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
    
    const ahora = new Date();
    setUltimaActualizacion(
        `${ahora.getDate()}/${ahora.getMonth() + 1}/${ahora.getFullYear()} a las ${ahora.getHours()}:${ahora.getMinutes()} hs.`
    );
};

const handleVerDetalle = (id) =>{
    const proyecto = proyectoService.obtenerProyectoPorId(id);
    setProyectoSeleccionado(proyecto);
};

    if(proyectoSeleccionado){
        return(
            <DetalleProyecto 
            proyecto={proyectoSeleccionado} 
            onVolver={() => setProyectoSeleccionado(null)} 
            />
        );
    }

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
                     onVerDetalle={handleVerDetalle}
                        
                    />
                ))}
                </div>
                <RegistroActividad fechaHora={ultimaActualizacion}/>
        </div>
    );
};

export default ListaProyectos;