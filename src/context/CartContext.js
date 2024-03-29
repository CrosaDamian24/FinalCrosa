import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (item) => {
    setCart([...cart, item]);
  };
  
  const removerItem = (id) =>{
    setCart(cart.filter((prod) => prod.id !== id))
  }
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const totalCantidad = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const totalCarrito = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
  };

  const vaciarCarrito = () =>{
    setCart([])
  }

  const editCantidad = (id,num) =>{
    const _cart = cart.slice()
    const item = _cart.find((prod) => prod.id === id)
    item.cantidad += num
    setCart(_cart)
  
  } 
  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        isInCart,
        totalCantidad,
        vaciarCarrito,
        removerItem,
        totalCarrito,
        editCantidad
      }}
    >
        {children}
    </CartContext.Provider>
  );
};
