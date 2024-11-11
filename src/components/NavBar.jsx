import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { useCart } from './CartContext'; 
import CartWidget from './CartWidget'; 
import Logo from './Logo'; 
import './Navbar.css'; 

const NavBar = () => {
  const { getTotalItemCount } = useCart(); // utilizo el hook useCart para obtener la función getTotalItemCount (dará el número total de artículos en el carrito)
  const cartCount = getTotalItemCount();   // llamo a getTotalItemCount para obtener el número total de artículos en el carrito y lo almaceno en cartCount
  

  return (
    <nav className="navbar"> 
      <Link to="/" className="logo">
        <Logo />
      </Link>
      <ul className="menu"> 
        <li><Link to="/category/Mieles">Mieles</Link></li>
        <li><Link to="/category/Jalea Real">Jalea Real</Link></li>
        <li><Link to="/category/Propóleo">Propóleo</Link></li>
      </ul>
      <CartWidget cartCount={cartCount} />
    </nav>
  );
};

export default NavBar;
