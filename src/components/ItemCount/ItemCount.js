

export const ItemCount = ({  max ,cantidad,setCantidad,stock,setStock, agregar}) => {
  // const [counter, setCounter] = useState(initial);
 
// console.log(cantidad,max)
  const handleSuma = () => {
    cantidad < max && setCantidad(cantidad + 1);
     stock >=1 && setStock(stock-1)


    // }
  };

  const handleResta = () => {
    cantidad >= 1 && setCantidad(cantidad - 1);
    cantidad >= 1 &&  setStock(stock+1)

   
  };

  // const handeleAgregar = () =>{
  //   const itemToAdd = {
  //     ...item,
  //     cantidad
  //   }
  //   console.log(itemToAdd)
  // }

  return (
    <div>
   

      <h3> {stock >0?`En stock `+stock:"Sin Stock"} </h3>
      {stock < 5 && stock>1 && <p><srtong>Quedan solo {stock} unidades!</srtong></p>}
      {stock ===1 && <p><srtong>Queda solo {stock} unidad!</srtong></p>}
      
      <button onClick={handleResta} className="btn btn-outline-primary" disabled={cantidad===0}>
        -
      </button>
      <span className="mx-3">{cantidad}</span>
      <button onClick={handleSuma} className="btn btn-primary" disabled={stock===0}>
        +
      </button>
      <hr/>
      <button onClick={agregar} className="btn btn-primary" disabled={cantidad===0} >Agregar al carrito</button>
    </div>
    
  );
};

export default ItemCount;
