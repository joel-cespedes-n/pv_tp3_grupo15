import React from "react";
import { Typography, Paper, List, ListItem, ListItemText } from "@mui/material";

const PerfilUsuario = () => {
  // Datos simulados del alumno/docente
  const usuario = {
    nombre: "Juan Pérez",
    rol: "Alumno",
    institucion: "Universidad Nacional de Buenos Aires"
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Perfil del Usuario
      </Typography>

      <Paper elevation={3} style={{ padding: "1.5rem", maxWidth: "500px" }}>
        <List>
          <ListItem>
            <ListItemText primary="Nombre" secondary={usuario.nombre} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Rol" secondary={usuario.rol} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Institución" secondary={usuario.institucion} />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};

export default PerfilUsuario;