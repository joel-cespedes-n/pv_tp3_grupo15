const proyectoService = (() =>{
    let proyectos = [

     {id: 1, titulo: "Plataforma Educativa",categoria: "Educacion", estado: "Activo",
     descripcion: "Desarrollo de una plataforma educativa en línea para cursos de programación. Incluye módulos de video, ejercicios interactivos y seguimiento del progreso del estudiante.",
     recursos: [{recurso:"https://github.com/joel-cespedes-n/pv_tp3_grupo15"}],
     equipo: [{nombre: "Cespedes Joel Normando", rol: "Desarrollador Frontend"}, {nombre: "Gutierrez Maximiliano Gabriel", rol: "Desarrollador Backend"}]
     },
     {id: 2, titulo: "App de Salud",categoria: "Salud", estado: "En desarrollo",
     descripcion: "Desarrollo de una aplicación móvil para el seguimiento de la salud y el bienestar. Incluye funciones de monitoreo de actividad física, recordatorios de medicamentos y consejos de salud personalizados.",
     recursos: [{recurso:"https://github.com/joel-cespedes-n/pv_tp3_grupo15"}],
     equipo: [{nombre: "Cespedes Joel Normando", rol: "Desarrollador Frontend"}, {nombre: "Gutierrez Maximiliano Gabriel", rol: "Desarrollador Backend"}]
     },
     {id: 3, titulo: "Sistema de Biblioteca",categoria: "Educacion", estado: "Finalizado",
     descripcion: "Desarrollo de un sistema de gestión de biblioteca para una universidad. Incluye funciones de catalogación, préstamo de libros y gestión de usuarios.",
     recursos: [{recurso:"https://github.com/joel-cespedes-n/pv_tp3_grupo15"}],
     equipo: [{nombre: "Cespedes Joel Normando", rol: "Desarrollador Frontend"}, {nombre: "Gutierrez Maximiliano Gabriel", rol: "Desarrollador Backend"}]
     },
     {id: 4, titulo: "Portal de Tecnologia",categoria: "Tecnologia", estado: "Activo",
     descripcion: "Desarrollo de un portal web para noticias y recursos tecnológicos. Incluye secciones de noticias, tutoriales y foros de discusión sobre tecnología.",
     recursos: [{recurso:"https://github.com/joel-cespedes-n/pv_tp3_grupo15"}],
     equipo: [{nombre: "Cespedes Joel Normando", rol: "Desarrollador Frontend"}, {nombre: "Gutierrez Maximiliano Gabriel", rol: "Desarrollador Backend"}]
     },
     {id: 5, titulo: "Gestion Hospitalaria",categoria: "Salud", estado: "Pendiente",
     descripcion: "Desarrollo de un sistema de gestión hospitalaria para mejorar la eficiencia en la administración de pacientes, citas y recursos médicos.",
     recursos: [{recurso:"https://github.com/joel-cespedes-n/pv_tp3_grupo15"}],
     equipo: [{nombre: "Cespedes Joel Normando", rol: "Desarrollador Frontend"}, {nombre: "Gutierrez Maximiliano Gabriel", rol: "Desarrollador Backend"}]
     }
    ];

    const obtenerProyectos = () => [...proyectos];
    const agregarProyecto = (proyecto) => { proyectos.push(proyecto); };
    const eliminarProyecto = (id) => {proyectos = proyectos.filter(p => p.id !== id); };
    const buscarProyecto =(texto) => proyectos.filter(p => p.titulo.toLowerCase ().includes(texto.toLowerCase()));

    const obtenerProyectoPorId = (id) => proyectos.find(p => p.id === id);

    return{
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto,
        obtenerProyectoPorId
    };

})();
export default proyectoService;