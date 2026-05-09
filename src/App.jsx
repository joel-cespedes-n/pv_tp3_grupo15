import { useState } from 'react'
import './App.css'
import ListaProyectos from './components/ListaProyectos'
import Header from './components/Header'
import Footer from './components/Footer'
import './css/styles.css'

const App = () => {
  return (
    <div id='root'>
      <Header />

      <main>
        <ListaProyectos/>
      </main>

      <Footer />
    </div>
  )
}

export default App
