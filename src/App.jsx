import { useState } from 'react'
import proyectoService from './services/proyectoService.js'
import './App.css'
import './css/styles.css'
import ListaProyectos from './components/ListaProyectos'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'
import Dashboard from './views/Dashboard.jsx'
import PerfilUsuario from './views/PerfilUsuario.jsx'
import DetalleProyecto from './components/DetalleProyecto.jsx'

const App = () => {
  return (
    <Router>
    <div id='root'>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Dashboard/>} />
          <Route path="/proyectos" element={<ListaProyectos/>} />
          <Route path="/proyectos/:id" element={<DetalleProyecto/>} />
          <Route path="/perfil" element={<PerfilUsuario/>} />
        </Routes>

      </main>
      <Footer />
    </div>
    </Router>
  )
}
export default App
