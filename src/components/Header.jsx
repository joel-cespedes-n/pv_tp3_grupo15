import  Nav  from './Nav'
import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

const Header = () => {

const {usuario} = useContext(UsuarioContext);

    return (
        <header>
            <h1>Gestion de Proyectos Estudiantiles</h1>
            <p>{usuario.nombre} - {usuario.rol}</p>
        </header>
    )
}

export default Header;