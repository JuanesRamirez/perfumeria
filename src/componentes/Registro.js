import React, {useState} from 'react'

import './/registro.css'

export default function Registro() {

  const [values, setValues] = useState({
    identificacion:"",
    nombres:"",
    apellidos:"",
    email:"",
    direccion:"",
    telefono:"",
    fechaNacimento:"",
    password:"",
    passRepeat:"",
  });
  const handleChange = (e) =>{
    
    const {name,value} = e.target
    const newValues = {
      ...values,
      [name]:value,
    }
    setValues(newValues)
  }

  return (

    <div className='formulario'>
      <form>
      <div class="form-group">
          <label for="numeroId">Id</label>
          <input type="number" class="form-control" id="inputNumero"  name='identificacion' onChange={handleChange} placeholder="entre 5 y 10 dígitos"/>
        </div>
        <div class="form-group">
          <label for="nombres">Nombres</label>
          <input type="text" class="form-control" id="inputNombre"  name='nombres' onChange={handleChange} placeholder="mínimo de tres caracteres"/>
        </div>
        <div class="form-group">
          <label for="apellidos">Apellidos</label>
          <input type="text" class="form-control" id="inputApellido" name='apellidos' onChange={handleChange} placeholder="mínimo de tres caracteres"/>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" name='email'onChange={handleChange} placeholder="debe ser alguien@gmail.com"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="direccion">Direccion</label>
          <input type="text" class="form-control" id="inputDireccion"  name='direccion'onChange={handleChange} placeholder="Direcccion"/>
        </div>
        <div class="form-group">
          <label for="telefono">Telefono</label>
          <input type="number" class="form-control" id="inputTelefono"  name='telefono'onChange={handleChange} placeholder=" diez números"/>
        </div>
        <div class="form-group">
          <label for="fecha">Fecha de Nacimiento</label>
          <input type="date" class="form-control" id="inputFecha" name='fechaNacimiento'onChange={handleChange} placeholder="Fecha de Nacimiento"/>
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" class="form-control" id="inputPassword" name='password'onChange={handleChange} placeholder="8 caracteres de longitud"/>
        </div>
        <div class="form-group">
          <label for="confirmar">Confirmar Contraseña</label>
          <input type="password" class="form-control" id="inputConfirmar"  name='passRepeat'onChange={handleChange} placeholder="Confirmar"/>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Aceptar terminos y condiciones</label>
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  )
}
