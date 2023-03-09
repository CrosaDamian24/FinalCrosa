import "./Footer.scss";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
// import logo from './logo.jpg'

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

      {/* <h1 className="header__logo">Logo</h1> */}
      {/* <img src ={logo} alt= 'logo' className="header__logo"></img>

        <nav className="navbar">
          <p className="navbar__link">Postres </p>
          <p className="navbar__link">Tortas</p>
          <p className="navbar__link">Facturas</p>
        </nav> */}
    </footer>
  );
};
