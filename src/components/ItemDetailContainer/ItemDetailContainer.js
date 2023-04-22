import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";
import { Loading } from "../Loading/Loading";

import { getDoc,doc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    

    //1 -armo referencia sincronica
    const docRef = doc(db,"productos",itemId)

    //2 -llamo a la referencia asincronica
    getDoc(docRef)
    .then((doc) =>{
      setItem({
        id: doc.id,
        ...doc.data()
      })
    })

      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div>

      {loading ? <Loading /> : <ItemDetail item={item} />}

    </div>
  );
};

export default ItemDetailContainer;
