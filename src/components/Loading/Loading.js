import Spinner from "react-bootstrap/Spinner";
import "./Loading.scss";

export const Loading = () => {
  return (
    <div className="divPadre">
      <div className="divHijo">
        {/* <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> */}

        <Spinner color="primary" className="spinnerReactstrap" />
      </div>
    </div>
  );
};
