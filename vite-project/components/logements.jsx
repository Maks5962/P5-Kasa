import React from 'react';
import { Link } from 'react-router-dom';

const Logements = ({logements}) => {
    

    // Rendu du composant
    return (
        <div className='cardContainer'>

            {/* Affichage des données si elles sont chargées */}
            <ul className="grid">
                {logements.map((logement) => (
                    <Link key={logement.id} to={"/LogementDetail/" + logement.id}>
                        <li className='grid__card'>
                            <img src={logement.cover}></img>
                            <h2 className='cardTitle'>{logement.title}</h2>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Logements;