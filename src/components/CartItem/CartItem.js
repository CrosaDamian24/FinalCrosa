import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsFillTrash3Fill } from "react-icons/bs";
import "./CartItem.scss";
import { ToastContainer, toast } from 'react-toastify'

export const CartItem = ({ item }) => {
  const { removerItem, editCantidad } = useContext(CartContext);

  return (
    <div key={item.id} className="carrito">
      <h4 className="carrito__nombre">{item.nombre}</h4>
      <div className="carrito__imagen">
        <img src={item.img} alt={item.nombre} className="img-fluid" />
      </div>
      <div className="carrito__botones"> 
        <button
          onClick={() => {
            editCantidad(item.id, -1);
            toast.error(' Quitado del carrito', {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light"
        
              })        

          }}
          disabled={item.cantidad === 0}
          className="btn botonquitar"
        >
          -
        </button>
        {/* <p>Cantidad: {item.cantidad}</p> */}
        <span className="mx-3">{item.cantidad}</span>
        <button
          onClick={() => {
            editCantidad(item.id, 1);
            toast.success(' Agregado al carrito', {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light"
        
              });
          }}
          disabled={item.cantidad === item.stock}
          className="btn botonagregar"
        >
          +
        </button>
        <ToastContainer/>
      </div>
      {/* <p>Stock actualizado {item.stock - item.cantidad}</p> */}
      <div className="carrito__precio">

      <p>Precio Unitario: <strong>$ {(item.precio).toFixed(2)}</strong></p>
      <p >Precio Total: <strong >$ {(item.precio * item.cantidad).toFixed(2)} </strong></p>
      </div>
      <button
        onClick={() => {
          removerItem(item.id);
        }}
        className="btn carrito__botoneliminar"
      >
        <BsFillTrash3Fill />
      </button>
    </div>
  );
};
