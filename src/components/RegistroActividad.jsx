function RegistroActividad({ fechaHora }) {
if (!fechaHora) return null;

return (
    <div className="registro-actividad">
        <p>Última actualización de la lista: {fechaHora}</p>
    </div>
  );
}
export default RegistroActividad;