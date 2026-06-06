import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProyectoCard = ({ proyecto, onEliminar }) => {
    const{ titulo, categoria, estado, id } = proyecto;
    const navigate = useNavigate();

    const handleVerDetalle = () => {
        navigate(`/proyectos/${id}`);
    };

    return(
        <div className="card">
            <h3>{titulo}</h3>
            <p>Categoria: {categoria}</p>
            <p>Estado: {estado}</p>
            <button onClick={handleVerDetalle}>Ver detalle</button>
            <button onClick={() => onEliminar(id)}>Eliminar</button>
            </div>
    );
};

export default ProyectoCard