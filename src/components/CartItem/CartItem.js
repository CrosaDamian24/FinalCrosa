
import { useContext } from "react"
import { CartContext } from "../../cartContext/CartContext"
import { ItemCount }from '../ItemCount/ItemCount'
import  {BsFillTrash3Fill } from 'react-icons/bs'


export const CartItem = ({item}) =>{

    const { removerItem ,editCantidad } = useContext(CartContext)

    return(
        <div key = {item.id}>
        <h4>{item.nombre}</h4>
        <img src={item.img} alt={item.nombre} />
        <div>


        <button onClick={() => {editCantidad(item.id,-1)}} disabled={item.cantidad===0}>-</button>
        {/* <p>Cantidad: {item.cantidad}</p> */}
        <span className="mx-3">{item.cantidad}</span>
        <button onClick={() => {editCantidad(item.id,1)}}  disabled={item.cantidad === item.stock}>+</button>
        </div>
        <p>Stock actualizado {item.stock-item.cantidad}</p>
        <p>Precio Unitario: {item.precio}</p>
        <p>Precio Total: {item.precio * item.cantidad}</p>
        <button onClick= {()=>{removerItem(item.id)}} className="btn btn-danger"><BsFillTrash3Fill/></button>

        
      
      

    </div>
    )
}