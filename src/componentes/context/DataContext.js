import { createContext, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    
    const [perfumesDelCarrito,setperfumesDelCarrito] = useState([])
    const [cantidadElementos,setCantidadElementos] = useState(0)

    return(
        <dataContext.Provider value={{ perfumesDelCarrito, setperfumesDelCarrito,cantidadElementos,setCantidadElementos}}>{children}</dataContext.Provider>
    )
}

export default DataProvider;