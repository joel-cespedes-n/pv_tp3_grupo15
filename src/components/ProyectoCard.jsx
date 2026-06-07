import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Card,CardContent, Typography, Button } from '@mui/material';

const ProyectoCard = ({ proyecto, onEliminar }) => {
    const{ titulo, categoria, estado, id } = proyecto;
    const navigate = useNavigate();

    const handleVerDetalle = () => {
        navigate(`/proyectos/${id}`);
    };

    return(
        <Card sx={{ marginBottom: 2 }}> 
          <CardContent>
            <Typography variant="h6">{titulo}</Typography>
            <Typography color="text.secondary">Categoría: {categoria}</Typography>
            <Typography color="text.secondary">Estado: {estado}</Typography>
            <Button 
              variant="outlined" 
              onClick={handleVerDetalle}
              sx={{mt: 1 }}
            >
                Ver detalle
            </Button>
            <Button variant="contained" color="error" onClick={() => onEliminar(id)} sx={{ ml: 1 }}>Eliminar
           </Button>
         </CardContent>
        </Card>
    );
};

export default ProyectoCard