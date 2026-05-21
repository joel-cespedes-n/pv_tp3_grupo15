
import { useState } from "react";

const FormularioProyecto = ({onAgregar}) => {
    const [nuevoProyecto, setNuevoProyecto] = useState({
        titulo: "",
        categoria: "",
        estado: "Activo",
        descripcion: "",
        recursos: [],
        equipo: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoProyecto({
            ...nuevoProyecto,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAgregar(nuevoProyecto);
        setNuevoProyecto({ 
            titulo: "",
            categoria: "",
            estado: "Activo",
            descripcion: "",
            recursos: [],
            equipo: [] 
        });
    };

    return (
        <form onSubmit={handleSubmit}>
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
            
            <button type="submit">Agregar Proyecto</button>
        </form>
    )
}

export default FormularioProyecto;