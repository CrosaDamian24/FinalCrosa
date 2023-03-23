import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Loading } from "../Loading/Loading";
import { Error404 } from "../Error404/Error404";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    pedirDatos()
      .then((res) => {
        setItem(res.find((prod) => prod.id === Number(itemId)));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="container my-5 ">

      {loading ? <Loading /> : <ItemDetail item={item} />}

    </div>
  );
};

export default ItemDetailContainer;
