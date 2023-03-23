import "./ItemDetail.scss";

export const ItemDetail = ({ item }) => {
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
    </div>
  );
};

export default ItemDetail;
