import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Inicio from './Inicio'
import Registro from './componentes/Registro'


export default function Enrutador() {
  return (
    <div>
      <HashRouter>
        <Routes>
            <Route exact path ='/' element={<Inicio/>}/>
            <Route exact path ='/registro' element={<Registro/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}
