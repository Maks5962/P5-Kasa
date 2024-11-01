import React from "react";
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="notFound">
            <h1 className="notFound__title">404</h1>
            <p className="notFound__p">Oups! La page que vous demandez n'existe pas.</p>
            <p><Link to="/" className="notFound__link">Retournez sur la page d'accueil</Link></p>
        </div>
    )
}

export default NotFound