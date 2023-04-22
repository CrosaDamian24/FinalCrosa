import { ToastContainer } from "react-toastify";

const CheckOutForm = ({ handleSubmit, handleImputChange, values }) => {
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
          <button
            className="btn botonenviar"
            type="submit"
            onClick={() => {
              // console.log("click")
            }}
          >
            Enviar
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CheckOutForm;
