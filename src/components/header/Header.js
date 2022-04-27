import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../img/logo.png';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);

  return (
    <nav className='Navbar'>
      <Link to='/' className='NavbarTitle'>
        <img src={logo} alt='bitblog logo' />
        <span>bitblog</span>
      </Link>

      <button className='NavbarBurger' onClick={toggleMenu}>
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='24' height='24' viewBox='0 0 24 24'><path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' /></svg>
      </button>

      <div className={(menu) ? 'NavbarMenu Open' : 'NavbarMenu Close'}>
        <Link to='/post/new' className='NavbarItem NavbarLink'>New Post</Link>
        <Link to='/' className='NavbarItem NavbarLink'>Your Blog</Link>
        <Link to='/' className='NavbarItem NavbarLink'>Account</Link>
      </div>
    </nav>
  );
};

export default Header;