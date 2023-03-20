
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer'
 import { Navbar } from "../Navbar/Navbar.js";
import { FaOtter } from "react-icons/fa";
import { Footer } from "../Footer/Footer";

export const  Inicio = () => {

    return(
        <BrowserRouter>
        <div>
        <Navbar />

        <Routes>
          <Route    path='/'    element={<ItemListContainer />}  />
          <Route    path='/productos/:categoryId'    element={<ItemListContainer />}  />
          <Route    path='/detail/:itemId'           element={<ItemDetailContainer />}/>
          {/* <Route            path="/nostros"    element={<ItemListContainer />}  /> */}
        </Routes>

        <Footer/>

        </div>
        </BrowserRouter>
    )
}

