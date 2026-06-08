import React from "react";
import { Alert } from "@mui/material"

const RegistroActividad = ({ fechaHora }) => {
if (!fechaHora) return null;

return (
    <Alert severity="info">
        Última actualización de la lista: {fechaHora}
    </Alert>
  );
}
export default RegistroActividad;