import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import React,{useState} from "react";
import { Inicio } from "./components/Inicio/Inicio";
import { Carga } from "./components/Carga/Carga";

function App() {

  const [loading, setLoading] = useState(false)

  setTimeout(() => {
    setLoading(true)
  }, 2000);

  return (
    // <BrowserRouter>
      <div>

        {
          loading
          ?<Inicio/>
          :<Carga/>
        }



      {/* <Footer /> */}
      </div>
    // </BrowserRouter>
  );
}

export default App;
