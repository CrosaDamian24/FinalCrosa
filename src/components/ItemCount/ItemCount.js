import { useState } from "react";

export const ItemCount = ({ initial, stock }) => {
  const [counter, setCounter] = useState(initial);

  const handleSuma = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handleResta = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <button className="btn btn-danger" onClick={handleResta}  disabled={counter === initial}>
        -
      </button>
      <span>{counter}</span>
      <button className="btn btn-primary" onClick={handleSuma} disabled={counter >= stock}>
        +
      </button>
      <button
        onClick={() => {
          alert(`Agregaste ${counter} productos`);
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
