import React, { useContext, useState } from "react";
import { Typography, Paper, List, ListItem,  ListItemText, TextField, Button } from "@mui/material";
import { UsuarioContext } from "../context/UsuarioContext";

const PerfilUsuario = () => {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);
  
  const [editando, setEditando] = useState(false);
  const[formData, setFormData] = useState(usuario);
  
  const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
   
  };

  const guardarCambios = () => {
    actualizarPerfil(formData);
    setEditando(false);
    console.log("Usuario en PerfilUsuario:", usuario);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Perfil del Usuario
      </Typography>

      <Paper elevation={3} style={{ padding: "1.5rem", maxWidth: "500px" }}>
        {editando ? (
          <>
          <TextField
           label="Nombre"
           name="nombre"
           value={formData.nombre}
           onChange={handleChange}
           fullWidth
           margin="normal" 
        />
         <TextField   
           label="DNI"
           name="dni"
           value={formData.dni}
           onChange={handleChange}
           fullWidth
           margin="normal"
        />     
         <TextField
           label="Rol"
           name="rol"
           value={formData.rol}
           onChange={handleChange}
           fullWidth
           margin="normal" 
         />
         <TextField
           label="Institución"
           name="institucion"
           value={formData.institucion} 
           onChange={handleChange}
           fullWidth
           margin="normal" 
          />
            <Button
             variant="contained"
             color="primary"
             onClick={guardarCambios}
             style={{ marginRight: "1rem" }}
           >
             Guardar Cambios
           </Button>
           <Button
           variant="outlined"
           color="secondary"
           onClick={() => setEditando(false)}
           >
            Cancelar
           </Button>
          </>
        ) : (
        <List>
          <ListItem>
            <ListItemText primary="Nombre" secondary={usuario.nombre} />
          </ListItem>
          <ListItem>
             <ListItemText primary="DNI" secondary={usuario.dni} />
             </ListItem>
             <ListItem>
            <ListItemText primary="Rol" secondary={usuario.rol} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Institución" secondary={usuario.institucion} />
          </ListItem>
          <Button 
          variant="outlined" 
          onClick={() => setEditando(true)}
          >
            Editar Perfil
            </Button>
        </List>
        )}
      </Paper>
    </div>
  );
};

export default PerfilUsuario;