import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Inicio from './Inicio'
import Registro from './componentes/Registro'
import Login from './componentes/Login'
import Inicio2 from './componentes/Inicio2'


export default function Enrutador() {
  return (
    <div>
      <HashRouter>
        <Routes>
            <Route exact path ='/' element={<Inicio/>}/>
            <Route exact path ='/registro' element={<Registro/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/sesion' element={<Inicio2/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}
