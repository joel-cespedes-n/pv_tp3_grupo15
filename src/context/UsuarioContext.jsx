import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState( () => {
     const usuarioGuardado = localStorage.getItem("usuario");
        return usuarioGuardado
        ? JSON.parse(usuarioGuardado)
        : {
            nombre : "Juan Pérez",
            dni : "12345678",
            rol : "Docente",
            institucion : "Universidad Nacional de Jujuy",
        };
    });

    const actualizarPerfil = (nuevosDatos) => {
        setUsuario(nuevosDatos);
    };
    useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);


    return (
        <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
            {children}
        </UsuarioContext.Provider>
    );
};