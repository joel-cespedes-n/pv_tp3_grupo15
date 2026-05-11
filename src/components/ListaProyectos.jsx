import { useState } from "react";
import proyectoService from "../services/proyectoService.js";
const ListaProyectos = () => {
    
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    const [busqueda, setBusqueda] = useState("");
    const [nuevoProyecto, setNuevoProyecto] = useState({
        titulo: "",
        categoria: "",
        estado: "Activo"
    });

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

    return (
        <div className="container">
            <h2>Lista de Proyectos</h2>

            <input type="text" placeholder="Buscar proyecto" value={busqueda} onChange={e => setBusqueda(e.target.value)} />

            <ul>
                {filtrarProyectos.map(p => (
                    <li key={p.id}>
                        {p.titulo} - {p.categoria} ({p.estado})
                        <button onClick={() => handleRemove(p.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>


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
                <option value="En progreso">En progreso</option>
                <option value="Completado">Completado</option>
                <option value="En pausa">En pausa</option>
            </select>
            
            <button onClick={handleAdd}>Agregar Proyecto</button>

        </div>
    )
}

export default ListaProyectos;