import "./Error.scss";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="container my-5 ">
      <div className="error">
        <div className="error__titulo">
          <h2>¡Uy! Algo salió mal</h2>
          {/* <h3>Vamos a solucionarlo. Intenta más tarde</h3> */}
          <Link className="btn botonvolver" to ="/"> Volver</Link>
        </div>
      </div>
    </div>
  );
};
