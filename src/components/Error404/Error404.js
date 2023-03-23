import "./Error.scss";

export const Error404 = () => {
  return (
    <div className="container my-5 ">
      <div className="error">
        <div className="error__titulo">
          <h1>¡Uy! Algo salió mal</h1>
          <h3>Vamos a solucionarlo. Intenta más tarde</h3>
        </div>
      </div>
    </div>
  );
};
