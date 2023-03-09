import './Navbar.scss'
import logo from './logo.jpg'
import Carrito from '../CartWidget/CartWidget'

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* <h1 className="header__logo">Logo</h1> */}
          <img src ={logo} alt= 'logo' className="header__logo"></img>

        <nav className="navbar">
          <p className="navbar__link">Postres </p>
          <p className="navbar__link">Tortas</p>
          <p className="navbar__link">Facturas</p>
        </nav>
        <Carrito/>
      </div>
    </header>
  );
};
