const proyectoService = (() =>{
    let proyectos = [

     {id: 1, titulo: "plataforma Educativa",categoria: "Educacion", estado: "Activo"},
     {id: 2, titulo: "App de Salud",categoria: "Salud", estado: "En desarrollo"},
     {id: 3, titulo: "Sistema de Biblioteca",categoria: "Educacion", estado: "Finalizado" },
     {id: 4, titulo: "portal de Tecnologia",categoria: "Tecnologia", estado: "Activo"},
     {id: 5, titulo: "Gestion Hospitalaria",categoria: "Salud", estado: "Pendiente"}
    ];

    const obtenerProyectos = () => [...proyectos];
    const agregarProyecto = (proyecto) => { proyectos.push(proyecto); };
    const eliminarProyecto = (id) => {proyectos = proyectos.filter(p => p.id !== id); };
    const buscarProyecto =(texto) => proyectos.filter(p => p.titulo.toLowerCase ().includes(texto.toLowerCase()));
    return{
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };
})();
export default proyectoService;