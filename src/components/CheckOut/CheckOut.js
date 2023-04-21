import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {
  writeBatch,
  collection,
  where,
  addDoc,
  getDocs,
  documentId,
  query,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import Orders from "../Orders/Orders";
import { ToastContainer, toast } from "react-toastify";
import "./CheckOut.scss";

const CheckOut = () => {
  const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext);

  const esCorreoElectronico = (correoElectronico) =>
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      correoElectronico
    );

  //   estados
  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
  });

  const [orderID, setOrderId] = useState(null);

  //   funciones
  const handleImputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (values.nombre.length < 5) {
      toast.info("Debe ingresar un nombre más largo", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (values.direccion.length < 6) {
      toast.info("Debe ingresar una dirección más larga", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (!esCorreoElectronico(values.email)) {
      toast.info("Debe ingresar una dirección de correo electronica valida", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else {
    }

    const orden = {
      cliente: values,
      items: cart,
      total: totalCarrito(),
      fyh: new Date(),
    };

    const batch = writeBatch(db);

    const ordersRef = collection(db, "orders");
    const productosRef = collection(db, "productos");

    const q = query(
      productosRef,
      where(
        documentId(),
        "in",
        cart.map((item) => item.id)
      )
    );

    const outOfStock = [];
    const productos = await getDocs(q);

    productos.docs.forEach((doc) => {
      const item = cart.find((prod) => prod.id === doc.id);

      if (doc.data().stock >= item.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - item.cantidad,
        });
      } else {
        outOfStock.push(item);
      }
    });

    if (outOfStock.length === 0) {
      await batch.commit();
      const { id } = await addDoc(ordersRef, orden);
      setOrderId(id);
      vaciarCarrito();

      // batch.commit()
      // .then( () =>{
      //         addDoc(ordersRef, orden)
      //         .then((doc) => {
      //             // console.log(doc.id)
      //             setOrderId(doc.id)
      //             vaciarCarrito()
      //         })
      // })
    } else {
      // alert(
      //   "Hay items sin stock: " + outOfStock.map((i) => i.nombre).join(", ")

      // );

      toast.error(
        "NO hay stock de: " + outOfStock.map((i) => i.nombre).join(", "),
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  if (orderID) {
    // return(
    //     <div className="container my-5">
    //         <h2>Tu compra se registró exitosamente! </h2>
    //         <hr/>
    //         <p>Guardá tu número de orden: <strong> {orderID}</strong></p>
    //     </div>
    // )
    return <Orders orden={orderID} />;
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container my-5 general">
      <h2>Ingresa tus datos</h2>

      <form onSubmit={handleSubmit} className="col-6 form">
        <input
          value={values.nombre}
          type="text"
          className="nombre my-2"
          placeholder="Tu nombre"
          onChange={handleImputChange}
          name="nombre"
        />

        <input
          value={values.direccion}
          type="text"
          className="nombre my-2"
          placeholder="Tu direccion"
          onChange={handleImputChange}
          name="direccion"
        />

        <input
          value={values.email}
          type="mail"
          className="nombre my-2"
          placeholder="Tu email"
          onChange={handleImputChange}
          name="email"
        />

        <div className="boton">
          <button className="btn botonenviar" type="submit">
            Enviar
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CheckOut;
