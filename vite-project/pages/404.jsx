import React from "react";
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <p><Link to="/">Retournez sur la page d'accueil</Link></p>
        </div>
    )
}

export default NotFound