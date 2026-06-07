
import { useState } from "react";
import {TextField, Button, Select, MenuItem, FormControl, InputLabel} from "@mui/material";

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
            <TextField
                label="Titulo"  
                name="titulo" 
                value={nuevoProyecto.titulo} 
                onChange={handleInputChange} 
                fullWidth
                margin="normal"
            />
            
            <TextField
                label="categoria"  
                name="categoria" 
                value={nuevoProyecto.categoria} 
                onChange={handleInputChange}
                fullWidth
                margin="normal" 
            />
            
            <TextField
                label="Descripcion"
                name="descripcion"
                value={nuevoProyecto.descripcion} 
                onChange={handleInputChange} 
                fullWidth
                margin="normal"
                multiline
                rows={3}
            />

           {nuevoProyecto.recursos.map((recurso, index) => (
            <TextField 
              key={index}
              label={`Recurso ${index + 1}`}
              value={recurso}
              onChange={(e) => {
                    const nuevosRecursos = [...nuevoProyecto.recursos];
                    nuevosRecursos[index] = e.target.value;
                    setNuevoProyecto({ ...nuevoProyecto, recursos: nuevosRecursos });
                }}
                fullWidth
                margin="normal"
                />
            ))}

            <Button
            type="button"
            variant="outlined"
            onClick={() =>
                setNuevoProyecto({
                ...nuevoProyecto,
                recursos: [...nuevoProyecto.recursos, ""]
                })
            }
            sx={{ marginTop: 1 }}
            >
            ➕ Agregar recurso
            </Button>

            {nuevoProyecto.equipo.map((integrante, index) => (
            <div key={index} style={{ display: "flex", gap: "1rem", marginTop: "1rem"}}>
                <TextField
                label="Nombre"
                value={integrante.nombre}
                onChange={(e) => {
                    const nuevoEquipo = [...nuevoProyecto.equipo];
                    nuevoEquipo[index].nombre = e.target.value;
                    setNuevoProyecto({ ...nuevoProyecto, equipo: nuevoEquipo });
                }}
                />
                <TextField
                label="Rol"
                value={integrante.rol}
                onChange={(e) => {
                    const nuevoEquipo = [...nuevoProyecto.equipo];
                    nuevoEquipo[index].rol = e.target.value;
                    setNuevoProyecto({ ...nuevoProyecto, equipo: nuevoEquipo });
                }}
                />
            </div>
            ))}

            <Button
              type="button"
              variant="outlined"
              onClick={() =>
                setNuevoProyecto({
                ...nuevoProyecto,
                equipo: [...nuevoProyecto.equipo, { nombre: "", rol: "" }]
                })
            }
            sx={{ marginTop: 1 }}
          >
              ➕ Agregar integrante
            </Button>

            <FormControl fullWidth margin="normal">
                <InputLabel>Estado</InputLabel>
                <Select 
                name="estado"
                value={nuevoProyecto.estado} 
                onChange={handleInputChange}
            >
                <MenuItem value="Activo">Activo</MenuItem>
                <MenuItem value="En desarrollo">En desarrollo</MenuItem>
                <MenuItem value="Pendiente">Pendiente</MenuItem>
                <MenuItem value="Finalizado">Finalizado</MenuItem>
            </Select>
            </FormControl>
            
            <Button
             type="submit"
             variant="contained"
             color="primary"
             sx={{ marginTop: 2 }}
            >
                Agregar Proyecto
            </Button>
        </form>
    );
};

export default FormularioProyecto;