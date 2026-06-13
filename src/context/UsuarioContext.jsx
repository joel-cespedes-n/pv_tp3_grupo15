import { createContext, useState, useContext } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState( () => {
        return {
            nombre : "Juan Pérez",
            dni : "12345678",
            rol : "Docente",
            institucion : "Universidad Nacional de Jujuy",
        };
    });

    const actualizarPerfil = (nuevosDatos) => {
        setUsuario(nuevosDatos);
    };

    return (
        <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
            {children}
        </UsuarioContext.Provider>
    );
}