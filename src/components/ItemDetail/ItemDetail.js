// import "./ItemDetail.scss";

export const ItemDetail = ({ item }) => {
  return (
    <div >


    <div >

        <h2>{item.nombre}</h2>

      <hr />
      <div >
        {/* <p>prueba</p> */}
        <img src={item.img} alt={item.nombre} className="img-fluid" />
      </div>

      <h6>{item.descripcion}</h6>
      {/* <p>Precio: ${item.precio}</p> */}
    </div>
    </div>
  );
};

export default ItemDetail;
