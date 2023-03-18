import "../ItemListContainer/ItemListContainer.scss";
// import { Button } from 'react-bootstrap';
// import ItemCount from '../ItemCount/ItemCount';
import { useEffect, useState } from "react";
import{pedirDatos} from '../../helpers/pedirDatos';
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";




export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)
  

  const {categoryId} = useParams()
  console.log(categoryId);

  useEffect(() => {
    setLoading(true)
    pedirDatos()
      .then((res) => {
        if (categoryId){
          setProductos (res.filter((prod) => prod.category ===categoryId))
        }else{
           setProductos(res);
        }
       
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() =>{
        setLoading(false)
      });
  }, [categoryId]);

  return (
    <div className="container my-5">

      {
        loading
        ?<h2>Cargando...</h2>
        : <ItemList items={productos}/>
      }
  
  

      {/* <p>{greeting}</p> */}
      {/* <button className="btn btn-primary">Click</button> */}
      {/* <Button>Click </Button> */}
      {/* <ItemCount   initial={1} stock={7} /> */}
    </div>
  );
};
