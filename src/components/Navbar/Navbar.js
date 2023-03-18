import './Navbar.scss'
import logo from './logo.jpg'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* <h1 className="header__logo">Logo</h1> */}
          <img src ={logo} alt= 'logo' className="header__logo"></img>

        <nav className="navbar">
          <Link to ='/'                  className="navbar__link">Inicio </Link>
          <Link to ='/productos/tortas'  className="navbar__link">Tortas</Link>
          <Link to ='/productos/postres' className="navbar__link">Postres</Link>
        </nav>
        <CartWidget/>
      </div>
    </header>
  );
};
