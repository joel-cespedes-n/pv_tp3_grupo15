const DetalleProyecto = ({ proyecto, onVolver }) => {
    return (
        <div className="detalle">
            <h2>{proyecto.titulo}</h2>
            <p><strong>Categoría:</strong> {proyecto.categoria}</p>
            <p><strong>Estado:</strong> {proyecto.estado}</p>
            <p><strong>Descripción:</strong> {proyecto.descripcion}</p>
            <p><strong>Lista de Recursos:</strong> <a href={proyecto.recursos} target="_blank" rel="noopener noreferrer">Ver recursos</a></p>
            <p><strong>Equipo:</strong></p>
            <ul>
                {proyecto.equipo.map((miembro, index) => (
                    <li key={index}>
                        <strong>{miembro.nombre}</strong> - {miembro.rol}
                    </li>
                ))}
            </ul>
            <button onClick={onVolver}>Volver a la lista</button>
        </div>
    );
}

export default DetalleProyecto;