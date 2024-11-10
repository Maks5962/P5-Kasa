import React from 'react';
import Header from '/components/Header';
import Footer from '/components/Footer';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <>
        <div className='maxWidth'>
            <Header />
            <main><Outlet/></main> {/* Affichage de la page dans le layout */}
        </div>
        <Footer />
        </>
    );
};

export default Layout;