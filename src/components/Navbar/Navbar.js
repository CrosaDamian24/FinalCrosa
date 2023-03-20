import "./Navbar.scss";
import logo from "./logo.jpg";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="header">
      <header className="container ">
        <div className="header__container">
          {/* <h1 className="header__logo">Logo</h1> */}
          <img src={logo} alt="logo" className="header__logo"></img>

          <nav className="navbar">
            <Link to="/" className="navbar__link">
              INICIO{" "}
            </Link>
            <Link to="/productos/tortas" className="navbar__link">
              TORTAS
            </Link>
            <Link to="/productos/postres" className="navbar__link">
              POSTRES
            </Link>
          </nav>
          <CartWidget />
        </div>
      </header>
    </div>
  );
};
