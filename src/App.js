import { Navbar } from"./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Footer } from"./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      {/* <ItemListContainer greeting={"Postres individuales"} /> */}
      <Footer />
    
    </div>
  );
}

export default App;
