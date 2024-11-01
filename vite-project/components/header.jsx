import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const urlActive = useLocation();

    return (
        <header>
            <div className='logo'>
                <Link to='/'>
                    <img src="../src/img/logo.svg" alt="Logo du site" className='logo__image'></img>
                </Link>
            </div>
            <nav className='navbar'>
                <Link to="/" className={`navbar__link ${urlActive.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
                <Link to="/about" className={`navbar__link ${urlActive.pathname === '/about' ? 'active' : ''}`}>À propos</Link>
            </nav>
        </header>
    );
};

export default Header;