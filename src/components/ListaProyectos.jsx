import { useState } from "react";
import proyectoService from "../services/proyectoService.js";
import ProyectoCard from "./ProyectoCard.jsx";
import DetalleProyecto from "./DetalleProyecto.jsx";

const ListaProyectos = () => {
    
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    const [busqueda, setBusqueda] = useState("");
    const [nuevoProyecto, setNuevoProyecto] = useState({
        titulo: "",
        categoria: "",
        estado: "Activo"
    });
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

    const filtrarProyectos = proyectos.filter(p => p.titulo.toLowerCase().includes(busqueda.toLowerCase()));

    const handleAdd = () => {
        const nuevoId =proyectos.length > 0
        ? Math.max(...proyectos.map(p => p.id)) + 1
        : 1;

        const proyectoAgregar = {
            id: nuevoId,
            titulo: nuevoProyecto.titulo,
            categoria: nuevoProyecto.categoria,
            estado: nuevoProyecto.estado
        };

        proyectoService.agregarProyecto(proyectoAgregar);

        setProyectos(proyectoService.obtenerProyectos());

        setNuevoProyecto({ titulo: "", categoria: "", estado: "Activo" });
    }

    const handleRemove = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoProyecto({
            ...nuevoProyecto,
            [name]: value
        });
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

            <input 
                type="text" 
                name="titulo"
                placeholder="Título" 
                value={nuevoProyecto.titulo} 
                onChange={handleInputChange} 
            />
            
            <input 
                type="text" 
                name="categoria"
                placeholder="Categoría" 
                value={nuevoProyecto.categoria} 
                onChange={handleInputChange} 
            />
            
            <select 
                name="estado"
                value={nuevoProyecto.estado} 
                onChange={handleInputChange}
            >
                <option value="Activo">Activo</option>
                <option value="En desarrollo">En desarrollo</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Finalizado">Finalizado</option>
            </select>
            
            <button onClick={handleAdd}>Agregar Proyecto</button>

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
        </div>
    );
};

export default ListaProyectos;