import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import React, { useState } from "react";
import { Inicio } from "./components/Inicio/Inicio";
import { Carga } from "./components/Carga/Carga";
import { Error404 } from "./components/Error404/Error404";
import { CartContext, CartProvider } from "./cartContext/CartContext";
import Cart from "./components/Cart/Cart";
import  CheckOut  from './components/CheckOut/CheckOut'

function App() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 2000);

  return (
    // <div>

    //   {
    //     loading
    //     ?<Inicio/>
    //     :<Carga/>
    //   }

    // </div>

    <CartProvider>
      <BrowserRouter>
        <div>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={<ItemListContainer item={"Productos"} />}
            />
            <Route
              path="/productos/:categoryId"
              element={<ItemListContainer item={""} />}
            />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={ <CheckOut /> }/>
            <Route path="*" element={<Error404 />} />
            {/* <Route            path="/nostros"    element={<ItemListContainer />}  /> */}
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
