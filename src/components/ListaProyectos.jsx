import { useState, useEffect, useRef } from "react";
import proyectoService from "../services/proyectoService.js";
import ProyectoCard from "./ProyectoCard.jsx";
import DetalleProyecto from "./DetalleProyecto.jsx";
import RegistroActividad from "./RegistroActividad.jsx";

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
    const [nuevoProyecto, setNuevoProyecto] = useState({
        titulo: "",
        categoria: "",
        estado: "Activo",
        descripcion: "",
        recursos: [],
        equipo: []
    });
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

    const[ultimaActualizacion, setUltimaActualizacion] = useState(null);

    const primeraCarga = useRef(true)

    useEffect(() => {
        if (primeraCarga.current) {
            primeraCarga.current = false;
            return;
        }
    const ahora = new Date();
    const minutos = String(ahora.getMinutes()).padStart(2, "0");
    setUltimaActualizacion(
        `${ahora.getDate()}/${ahora.getMonth() + 1}/${ahora.getFullYear()} a las ${ahora.getHours()}:${minutos} hs.`
        );
    }, [proyectos]);

    const filtrarProyectos = proyectos.filter(p => p.titulo.toLowerCase().includes(busqueda.toLowerCase()));

    const handleAdd = () => {
        const nuevoId =proyectos.length > 0
        ? Math.max(...proyectos.map(p => p.id)) + 1
        : 1;

        const proyectoAgregar = {
            id: nuevoId,
            titulo: nuevoProyecto.titulo,
            categoria: nuevoProyecto.categoria,
            estado: nuevoProyecto.estado,
            descripcion: nuevoProyecto.descripcion,
            recursos: nuevoProyecto.recursos,
            equipo: nuevoProyecto.equipo
        };

        proyectoService.agregarProyecto(proyectoAgregar);
        setProyectos(proyectoService.obtenerProyectos());

        setNuevoProyecto({ titulo: "", categoria: "", estado: "Activo", descripcion: "", recursos: [], equipo: [] });
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
            
            <textarea
                name="descripcion"
                placeholder="Descripción" 
                value={nuevoProyecto.descripcion} 
                onChange={handleInputChange} 
            />

           {nuevoProyecto.recursos.map((recurso, index) => (
            <div key={index}>
                <input
                type="text"
                placeholder={`Recurso ${index + 1}`}
                value={recurso}
                onChange={(e) => {
                    const nuevosRecursos = [...nuevoProyecto.recursos];
                    nuevosRecursos[index] = e.target.value;
                    setNuevoProyecto({ ...nuevoProyecto, recursos: nuevosRecursos });
                }}
                />
            </div>
            ))}

            <button
            type="button"
            onClick={() =>
                setNuevoProyecto({
                ...nuevoProyecto,
                recursos: [...nuevoProyecto.recursos, ""]
                })
            }
            >
            ➕ Agregar recurso
            </button>

            {nuevoProyecto.equipo.map((integrante, index) => (
            <div key={index}>
                <input
                type="text"
                placeholder="Nombre"
                value={integrante.nombre}
                onChange={(e) => {
                    const nuevoEquipo = [...nuevoProyecto.equipo];
                    nuevoEquipo[index].nombre = e.target.value;
                    setNuevoProyecto({ ...nuevoProyecto, equipo: nuevoEquipo });
                }}
                />
                <input
                type="text"
                placeholder="Rol"
                value={integrante.rol}
                onChange={(e) => {
                    const nuevoEquipo = [...nuevoProyecto.equipo];
                    nuevoEquipo[index].rol = e.target.value;
                    setNuevoProyecto({ ...nuevoProyecto, equipo: nuevoEquipo });
                }}
                />
            </div>
            ))}

            <button
            type="button"
            onClick={() =>
                setNuevoProyecto({
                ...nuevoProyecto,
                equipo: [...nuevoProyecto.equipo, { nombre: "", rol: "" }]
                })
            }
            >
            ➕ Agregar integrante
            </button>

           
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
                <RegistroActividad fechaHora={ultimaActualizacion}/>
        </div>
    );
};

export default ListaProyectos;