import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./Cart.scss";

const Cart = () => {
  const { cart, vaciarCarrito, totalCarrito } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container my-5 cartsinproductos">
        <h2 className="cartsinproductos__titulo">
          No hay productos en el carrito
        </h2>
        {/* <br/> */}
        <Link className="btn botonvolver" to="/">
          {" "}
          Volver
        </Link>
      </div>
    );
  }
  return (
    <div className="container my-5">
      <h3 className="titulo">TU PEDIDO</h3>
      <div className="col cart">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <h3 className="titulo">Total: ${totalCarrito().toFixed(2)}</h3>
      <button onClick={vaciarCarrito} className="btn botonvaciar">
        Vaciar Carrito
      </button>
      <Link to="/checkout" className="btn botonfinalizar">
        Finalizar compra
      </Link>
    </div>
  );
};

export default Cart;
