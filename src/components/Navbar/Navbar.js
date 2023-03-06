import './Navbar.scss'
import logo from './logo.jpg'
import Carrito from '../Carrito/Carrito'

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* <h1 className="header__logo">Logo</h1> */}
          <img src ={logo} alt= 'logo' className="header__logo"></img>

        <nav className="navbar">
          <p className="navbar__link">Enlace 1 </p>
          <p className="navbar__link">Enlace 2</p>
          <p className="navbar__link">Enlace 3</p>
        </nav>
        <Carrito/>
      </div>
    </header>
  );
};
