import { useState } from 'react'
import proyectoService from './services/proyectoService.js'
import './App.css'
import './css/styles.css'

import ListaProyectos from './components/ListaProyectos'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

  const App = () => {
  return (
    <div id='root'>
      <Header />
      <Nav />
      <main>
        <ListaProyectos />
      </main>
      <Footer />
    </div>
  )
}
export default App
