
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer'
 import { Navbar } from "../Navbar/Navbar.js";
import { Footer } from "../Footer/Footer";
import { Error404 } from '../Error404/Error404'

export const  Inicio = () => {

    return(
        <BrowserRouter>
        <div>
        <Navbar />

        <Routes>
        <Route    path='/'                         element={<ItemListContainer item={"Productos"} />}  />
          <Route    path='/productos/:categoryId'    element={<ItemListContainer item={""} />}  />
          <Route    path='/detail/:itemId'           element={<ItemDetailContainer />}/>
          <Route    path='*'                         element={<Error404 />}/>
          {/* <Route            path="/nostros"    element={<ItemListContainer />}  /> */}
        </Routes>

        <Footer/>

        </div>
        </BrowserRouter>
    )
}

