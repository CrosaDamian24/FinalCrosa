import "../ItemListContainer/ItemListContainer.scss";
// import { Button } from 'react-bootstrap';
// import ItemCount from '../ItemCount/ItemCount';
import { useEffect, useState } from "react";
import{pedirDatos} from '../../helpers/pedirDatos';
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Loading } from "../Loading/Loading";
import {Error404} from '../Error404/Error404'






export const ItemListContainer = ({item}) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)
  

  const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true)
    pedirDatos()
      .then((res) => {
        if (categoryId){
          setProductos (res.filter((prod) => prod.category === categoryId))

  

        
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

     { loading
     ? <Loading/>
     : (productos.length>0)>0?<ItemList  items= {productos} items2={categoryId?categoryId:item}/>:<Error404/>
     }


  

      {/* <p>{greeting}</p> */}
      {/* <button className="btn btn-primary">Click</button> */}
      {/* <Button>Click </Button> */}
      {/* <ItemCount   initial={1} stock={7} /> */}
    </div>
  );
};
