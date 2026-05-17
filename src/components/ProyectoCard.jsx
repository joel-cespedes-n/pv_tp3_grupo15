const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
    const{ titulo, categoria, estado, id } = proyecto;
    return(
        <div className="card">
            <h3>{titulo}</h3>
            <p>Categoria: {categoria}</p>
            <p>Estado: {estado}</p>
            <button onClick={() => onVerDetalle(id)}>Ver detalle</button>
            <button onClick={() => onEliminar(id)}>Eliminar</button>
            </div>
    )
}
export default ProyectoCard