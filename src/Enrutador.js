import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Inicio from './Inicio'
import Registro from './componentes/Registro'
import Login from './componentes/Login'
import Inicio2 from './componentes/Inicio2'
// import CarritoElements from './componentes/carrito/CarritoElements'
//import DataProvider from './componentes/context/DataContext'
// import CarritoVacio from './componentes/carrito/CarritoVacio'


export default function Enrutador() {
  return (
    <div>
      {/* <DataProvider> */}
        <HashRouter>
          <Routes>
              <Route exact path ='/' element={<Inicio/>}/>
              <Route exact path ='/registro' element={<Registro/>}/>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/sesion' element={<Inicio2/>}/>
            {/* <Route exact path='/carrito' element={<CarritoElements/>}/>
            <Route exact path='/carro-vacio' element={<CarritoVacio/>}/> */}
          </Routes>
        </HashRouter>
      {/* </DataProvider> */}
    </div>
  )
}
