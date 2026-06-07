import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/inicio">Inicio</Link></li>
                <li><Link to="/perfil">Perfil</Link></li>
                <li><Link to="/proyectos">Proyectos</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;