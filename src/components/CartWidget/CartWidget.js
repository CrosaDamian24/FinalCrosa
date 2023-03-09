import { FaCartPlus } from "react-icons/fa";
import "./CartWidget.scss";

const Carrito = () => {
  return (
    <div className="carrito">
      <FaCartPlus className="carrito-icon"/>
      <span>0</span>
    </div>
  );
};

export default Carrito;
