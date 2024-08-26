//import React, { useContext } from "react";
import './card.css'
//import { dataContext} from "../context/DataContext"

export default function Cards(props) {
//   const { setperfumesDelCarrito } = useContext(dataContext)

//   function addToCart(){
//     setperfumesDelCarrito((currentProductos) => {
//         const isTemFound = currentProductos.find((item) => item.id === props.items.id);

//         if(isTemFound){
//             return currentProductos.map((item) =>{
//                 if(item.id === props.items.id){
//                     return{ ...item, cantidad: Number(item.cantidad)  + 1, precioCarrito: item.precio}

//                 }else{
//                     return item
//                 }
//             } )
//         }
//         else{
//             return [...currentProductos,props.items]
//         }
//     })
// }

  return (
    <div className='card2'>
      <img src={props.items.image} alt='logo'/>
      <div>
        <h5>{props.items.title}</h5>
        <p>{props.items.description}</p>
        <p>{props.items.precio}</p>
        {/* <button type='button' class="btn btn-outline-danger" onClick={addToCart()}>Comprar</button> */}
      </div>
      
    </div>
  )
}
