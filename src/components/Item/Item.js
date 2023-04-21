// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Item.scss";

export const Item = ({ item }) => {
  return (
    <div className="col-4 mb-2 ">
      <div className="card card__sombra">
              {/* <strong> */}
        <h5 className="card__title"> {item.nombre}</h5>
        <div className="tarjeta__img">
          <img src={item.img} alt={item.nombre} className="img-fluid   detalle__imagen"   />
        </div>
        <span className="m-2">  
          Precio: <strong>$ {(item.precio).toFixed(2)}</strong>
        </span>
        {/* <Button className="selectorColor"> */}
          {" "}
          <Link to={`/detail/${item.id}`}  className="btn botonvermas">Ver mas</Link>
        {/* </Button>
        {" "} */}
      </div>
    </div>
  );
};

export default Item;
