import { useState } from 'react'
import proyectoService from './services/proyectoService.js'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ListaProyectos from './components/ListaProyectos'
import Header from './components/Header'
import Footer from './components/Footer'
import './css/styles.css'

const App = () => {

  const[proyectos, setProyecto] = useState(proyectoService.obtenerProyectos())
  const [count, setCount] = useState(0)

  return (
    <div id='root'>
      <Header />

      <main>
        <ListaProyectos/>
      </main>

       <section id="proyectos">
        <h2>Lista de Proyectos</h2>
        <ul>
          {proyectos.map(p => (
            <li key={p.id}>
              {p.titulo} - {p.categoria} ({p.estado})
            </li>
          ))}
        </ul>
      </section>
      
      <Footer />
    </div>
  )
}

export default App
