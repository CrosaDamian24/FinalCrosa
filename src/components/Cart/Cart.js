import { useContext } from "react";
import { CartContext } from "../../cartContext/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { Link } from "react-router-dom";
// import { CheckOut } from "../CheckOut/CheckOut"


const Cart = () => {
  const { cart, vaciarCarrito, totalCarrito } = useContext(CartContext);


  if (cart.length === 0){
    return (
        <div className="container my-5">
        <h2>No tienes productos agregados</h2>
        {/* <br/> */}
        <Link className="btn btn-primary" to ="/"> Volver</Link>
        </div>
    )
  }
  return (
    <div className="container my-5">

      <h2>Tu Carrito de Compras</h2>
      <hr />

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      )
      
      )
      
      }
     <h3>Total: $  {totalCarrito()}</h3>
    <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar Carrito</button>
    <Link to = "/checkout" className="btn btn-success">Terminar mi compra</Link>

    </div>
  );
};

export default Cart;
