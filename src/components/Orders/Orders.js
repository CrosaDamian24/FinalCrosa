const Orders = ({orden}) => {
    return(
        <div className="container my-5">
            <h2>Tu compra se registró exitosamente! </h2>
            <hr/>
            <p>Guardá tu número de orden: <strong> {orden}</strong></p>
        </div>
    )
}

export default Orders;