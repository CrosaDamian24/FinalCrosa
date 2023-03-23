import "./Footer.scss";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container row">
        <p className="col-xl-12 footer__text">Seguinos en las redes</p>
        <p className="col-xl-12 footer__icon">
          <FaInstagram className="" />
          <FaFacebook className="" />
          <FaWhatsapp className="" />
        </p>
      </div>
    </footer>
  );
};
