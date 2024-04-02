import React from 'react'

export default function Cards(props) {
  return (
    <div className='card2'>
      <img src={props.items.image} alt='logo'/>
      <div>
        <h5>{props.items.title}</h5>
        <p>{props.items.description}</p>
        <p>{props.items.precio}</p>
        <button type='button' class="btn btn-outline-danger">Comprar</button>
      </div>
      
    </div>
  )
}
