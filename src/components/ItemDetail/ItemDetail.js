import "./ItemDetail.scss";
import { ItemCount } from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);
  const [stock, setStock] = useState(item.stock);

  const { agregarAlCarrito, isInCart } = useContext(CartContext);

  const handleAgregar = () => {
    const newItem = {
      ...item,
      cantidad,
    };

    agregarAlCarrito(newItem);
    toast.success(" Agregado al carrito", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="principal">
      <div className=" detalle col-6">
        <div className="detalle__titulo">
          <h4 className="my-2">{item.nombre}</h4>
        </div>

        <div className="detalle__img">
          <img
            src={item.img}
            alt={item.nombre}
            className="img-fluid detalle__imagen"
          />
        </div>
        <div className="detalle__descripcion">
          <h6>{item.descripcion}</h6>
        </div>
        {/* <h5>En Stock: {item.stock}</h5> */}

        <div className="detalle__boton">
          {item.stock === 0 ? (
            <h3 className="sinstock">Producto sin STOCK</h3>
          ) : isInCart(item.id) ? (
           
            <Link to="/cart" className="btn botonterminar">
              Terminar mi compra{" "}
            </Link>
          ) : (
            <ItemCount
              max={item.stock}
              cantidad={cantidad}
              setCantidad={setCantidad}
              stock={stock}
              setStock={setStock}
              agregar={handleAgregar}
  
            />
          )}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
