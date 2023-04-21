

import "./ItemCount.scss";

export const ItemCount = ({  max ,cantidad,setCantidad,stock,setStock, agregar,vaciar}) => {



  const handleSuma = () => {
    cantidad < max && setCantidad(cantidad + 1);
     stock >=1 && setStock(stock-1)

  };

  const handleResta = () => {
    cantidad >= 1 && setCantidad(cantidad - 1);
    cantidad >= 1 &&  setStock(stock+1)
    
  };


  return (
    <div className="col-8">
   

      {/* <h3> {stock >0?`En stock `+stock:"Sin Stock"} </h3> */}
      {/* <div className={`leyenda ${stock < 5 && stock > 1 ? 'leyenda-active' :' '}`}>
        { <p><strong >Quedan solo {stock} unidades!</strong></p>}
      </div>

      <div className={`leyenda ${stock === 1 ? 'leyenda-active' :' '}`}>
         <p><strong>Queda solo {stock} unidad!</strong></p>
      </div> */}
      
      {/* {stock < 5 && stock>1 && <p><srtong>Quedan solo {stock} unidades!</srtong></p>} */}
      {/* {stock ===1 && <p><strong>Queda solo {stock} unidad!</strong></p>} */}

      <div className="botones">
      
      <button onClick={handleResta} className="btn botonquitar" disabled={cantidad===0}>
        -
      </button>
      <span className="mx-3">{cantidad}</span>
      <button onClick={handleSuma} className="btn botonagregar" disabled={stock===0}>
        +
      </button>

      </div>

      <div className="botones ">

      <button onClick={agregar} className="btn botones--modificada" disabled={cantidad===0} >Agregar al carrito</button>
      </div>
   
    </div>
    
  );
};

export default ItemCount;
