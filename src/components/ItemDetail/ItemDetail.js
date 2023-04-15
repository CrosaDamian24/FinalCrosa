import "./ItemDetail.scss";
import { ItemCount } from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../cartContext/CartContext";
import { Link } from "react-router-dom";

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
  };

  return (
    <div className=" detalle col-8">
      <div className="detalle__titulo">
        <h2 className="my-2">{item.nombre}</h2>
      </div>

      <div className="detalle__img">
        <img
          src={item.img}
          alt={item.nombre}
          className="img-fluid detalle__imagen"
        />
      </div>
      <div className="detalle__descripcion">
        <h5>{item.descripcion}</h5>
      </div>
      {/* <h5>En Stock: {item.stock}</h5> */}
      

      {
        item.stock === 0
        ?<h3>Producto sin STOCK</h3>
        : isInCart(item.id)  
          ? (          <Link to="/cart" className="btn btn-success">Terminar mi compra </Link>)
          : (
            <ItemCount
              max={item.stock}
              cantidad={cantidad}
              setCantidad={setCantidad}
              stock={stock}
              setStock={setStock}
              agregar={handleAgregar}
            />)
      }
    </div>
  );
};

export default ItemDetail;
