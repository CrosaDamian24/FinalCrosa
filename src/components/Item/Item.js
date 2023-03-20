// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Item.scss";

export const Item = ({ item }) => {
  return (
    // <div className="col-3 tarjeta">
    //   <h2>{item.nombre}</h2>
    //   <div className="tarjeta__img">
    //     <img className="img" src={item.img} alt={item.nombre} />
    //   </div>

    //   {/* <p>{item.descripcion}</p> */}
    //   <p>Precio: ${item.precio}</p>

    //     {/* <p><small>Categoria: {item.category}</small></p> */}
    //     <Link to={`/detail/${item.id}`} className="tarjeta__boton">
    //       Ver mas{" "}
    //     </Link>

    // </div>
    // <div className="row">
    <div className="col-4 mb-2 ">
      <div className="card card__sombra">
        <div className="card-body fuente"></div>
        {/* <strong> */}

        <h5 className="card-title  "> {item.nombre}</h5>
        {/* </strong> */}
        <div className="tarjeta__img">
          <img src={item.img} alt={item.nombre} className="img-fluid" />
        </div>
        <span>
          Precio: <strong>$ {item.precio}</strong> 
        </span>
        {/* <Link to={`/detail/${item.id}`} >
          Ver mas{" "}
        </Link> */}

        <Button className="selectorColor" >  <Link to={`/detail/${item.id}`} >
          Ver mas{" "}
        </Link></Button>{' '}
      </div>
    </div>
    // </div>
  );
};

export default Item;
