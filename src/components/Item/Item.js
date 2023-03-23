// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Item.scss";

export const Item = ({ item }) => {
  return (
    <div className="col-4 mb-2 ">
      <div className="card card__sombra">
        <div className="card-body"></div>
        {/* <strong> */}
        <h5 className="card-title"> {item.nombre}</h5>
        <div className="tarjeta__img">
          <img src={item.img} alt={item.nombre} className="img-fluid" />
        </div>
        <span>
          Precio: <strong>$ {item.precio}</strong>
        </span>
        <Button className="selectorColor">
          {" "}
          <Link to={`/detail/${item.id}`}>Ver mas</Link>
        </Button>{" "}
      </div>
    </div>
  );
};

export default Item;
