import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../../cartContext/CartContext";
import { writeBatch, collection, where, updateDoc, addDoc,doc, getDocs, documentId,query} from "firebase/firestore";
import { db } from "../../firebase/config";
import Orders from "../Orders/Orders";


const CheckOut = () => {

  const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext);

//   estados
  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
  });

  const [orderID, setOrderId] = useState(null)

//   funciones
  const handleImputChange = (e) => {
  
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (values.nombre.length <3){
        alert("El nombre es muy corto")
        return
    }

    if (values.direccion.length < 6){
        alert("La direccion es muy corta")
        return
    }

    
    if (values.email.length < 6){
        alert("El mail es muy corto")
        return
    }


    const orden = {
      cliente: values,
      items: cart,
      total: totalCarrito(),
      fyh: new Date(),
    };
    
const batch = writeBatch(db)

    const ordersRef = collection(db,"orders")
    const productosRef = collection(db,"productos")

     const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))
    
     const outOfStock = []
     const productos = await getDocs(q)

    productos.docs.forEach((doc) => {
        const item = cart.find((prod) => prod.id === doc.id)

        if (doc.data().stock >= item.cantidad){
    
            batch.update(doc.ref,{
                stock : doc.data().stock - item.cantidad
            })
        }else{
            outOfStock.push(item)
        }
    })

    if (outOfStock.length === 0){
        await batch.commit()
        const {id} = await addDoc(ordersRef,orden)
        setOrderId(id)
        vaciarCarrito()

        // batch.commit()
        // .then( () =>{
        //         addDoc(ordersRef, orden)
        //         .then((doc) => {
        //             // console.log(doc.id)
        //             setOrderId(doc.id)
        //             vaciarCarrito()
        //         })
        // })
    }else{
        alert("Hay items sin stock: "+ outOfStock.map(i => i.nombre).join(', '))
    }






    
  };

  if (orderID){
    // return(
    //     <div className="container my-5">
    //         <h2>Tu compra se registró exitosamente! </h2>
    //         <hr/>
    //         <p>Guardá tu número de orden: <strong> {orderID}</strong></p>
    //     </div>
    // )
    return(
    <Orders orden ={orderID}/>)

  }

  if(cart.length === 0) {
    return <Navigate to = "/" />
  }
  return (
    <div className="container my-5">
      <h2>Ingresa tus datos</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          value={values.nombre}
          type="text"
          className="form-control my-2"
          placeholder="Tu nombre"
          onChange={handleImputChange}
          name="nombre"
        />

        <input
          value={values.direccion}
          type="text"
          className="form-control my-2"
          placeholder="Tu direccion"
          onChange={handleImputChange}
          name="direccion"
        />

        <input
          value={values.email}
          type="mail"
          className="form-control my-2"
          placeholder="Tu email"
          onChange={handleImputChange}
          name="email"
        />

        <button className="btn btn-primary" type="submut">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
