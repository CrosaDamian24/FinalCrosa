// import { Button } from "react-bootstrap";

export const Item = ({ item }) => {
  return (
    <div className="col-3 m-2">
      <h2>{item.nombre}</h2>
      <img src={item.img} alt="prod" />
      <p>{item.descripcion}</p>
      <p>{item.precio}</p>


        <button className="btn btn-primary">Ver mas </button>

      
    </div>
  );
};

export default Item;
