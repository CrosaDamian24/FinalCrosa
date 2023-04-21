import { Link } from "react-router-dom";

const Orders = ({orden}) => {
    
    return(
        <div className="container my-5 general">
            <h2>Tu compra se registró exitosamente! </h2>
            <hr/>
            <p>Guardá tu número de orden: <strong> {orden}</strong></p>

            <Link className="btn botonvolver" to ="/"> Volver</Link>
        </div>
    )
}

export default Orders;