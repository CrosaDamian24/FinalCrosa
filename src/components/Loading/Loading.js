import Spinner from "react-bootstrap/Spinner";
import "./Loading.scss";
import { SpinnerDiamond } from 'spinners-react';


export const Loading = () => {
  return (
    <div className="divPadre">
      <div className="divHijo">
        {/* <Spinner color="primary" className="spinnerReactstrap" /> */}
        {/* <Spinner size={50} thickness={100} speed={100} color="#36ad47" /> */}

        <SpinnerDiamond size={50} thickness={100} speed={100} color="#6a4724"  secondaryColor="rgba(0, 0, 0, 0.44)"  className="spinnerReactstrap"/>

      </div>
    </div>
  );
};
