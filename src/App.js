import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        {/* <Footer /> */}
        {/* greeting={"Postres individuales"}  */}
        {/* CrosaDamian24/React.git*/}
        {/* dfdf */}
        <Routes>
          <Route            path="/"    element={<ItemListContainer />}  />
          <Route            path="/productos/:categoryId"    element={<ItemListContainer />}  />
          {/* <Route            path="/nostros"    element={<ItemListContainer />}  /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
