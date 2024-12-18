import React from 'react';
import { Link } from 'react-router-dom';
import { useLogements } from '../hooks/useLogements';

const Logements = () => {

    const { logements, error } = useLogements(); // Appel du hook personnalisé 

    if(error) {
        return { error } // Retourne l'erreur dans le cas échéant non visible par l'utilisateur
    }

    // Rendu du composant
    return (
        <div className='cardContainer'>

            {/* Affichage des données si elles sont chargées */}
            <ul className="grid">
                {logements.map((logement) => (
                    <Link key={logement.id} to={"/LogementDetail/" + logement.id}>
                        <li className='grid__card'>
                            <img src={logement.cover} alt={logement.title}></img>
                            <h2 className='cardTitle'>{logement.title}</h2>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Logements;