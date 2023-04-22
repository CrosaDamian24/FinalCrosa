import "./ItemCount.scss";

export const ItemCount = ({
  max,
  cantidad,
  setCantidad,
  stock,
  setStock,
  agregar
}) => {
  const handleSuma = () => {
    cantidad < max && setCantidad(cantidad + 1);
    stock >= 1 && setStock(stock - 1);
  };

  const handleResta = () => {
    cantidad >= 1 && setCantidad(cantidad - 1);
    cantidad >= 1 && setStock(stock + 1);
  };

  return (
    <div className="principal">
      {
        <p
          className={`leyenda ${
            stock < 5  ? "leyenda-active" : " "
          }`}
        >
          <strong className={`${stock === 1 || stock === 0 ? "leyenda-modifcada" : " " }`}>
            {" "}
            {stock === 1 && stock !== 0
              ? `Queda solo ${stock} unidad! `
              : stock !== 0 ?`Quedan solo ${stock} unidades! `:`Sin Stock`}{" "}
          </strong>
        </p>
      }

      <div className="botones">
        <button
          onClick={handleResta}
          className="btn botonquitar"
          disabled={cantidad === 0}
        >
          -
        </button>
        <strong><span className="mx-3">{cantidad}</span></strong>
        <button
          onClick={handleSuma}
          className="btn botonagregar"
          disabled={stock === 0}
        >
          +
        </button>
      </div>

      <div className="botones ">
        <button
          onClick={agregar}
          className="btn botones--modificada"
          disabled={cantidad === 0}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
