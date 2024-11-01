import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <img src="../src/img/logo.svg" alt="Logo du site" className='logo__image'></img>
            </div>
            <nav className='navbar'>
                <Link to="/" className='navbar__link active'>Accueil</Link>
                <Link to="/about" className='navbar__link'>À propos</Link>
            </nav>
        </header>
    );
};

export default Header;