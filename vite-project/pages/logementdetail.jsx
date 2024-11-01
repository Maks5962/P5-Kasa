import React from 'react';
import { useLogements } from '../hooks/useLogements';
import { useParams, Navigate } from 'react-router-dom';
import Collapse from '../components/collapse';
import RatingHost from '../components/ratinghost';

const LogementDetail = () => {

    const { logements, loading, error } = useLogements();
    const { id } = useParams(); // Récupère l'id de l'url

    if(loading) {
        return <p>Chargement en cours</p>
    }
    
    if(error) {
        return { error }
    }
    
    
    const logement = logements.find((logement) => logement.id === id); // Cherche l'existance du logement

    if (!logement) {
        // Redirige vers la page 404 si le logement n'existe pas
        return <Navigate to="/404" />;
    }


    const fullname = logement.host['name'].split(' ');

    
    return (
        <div className='logementDetail'>
            <img src={logement.cover} alt={logement.title} className="logementDetail__img"></img>

            <div className='logementDetail__infos'>
                <div className='logementDetail__column logementDetail__column--left'>                
                    <h2 className='logementDetail__title'>{logement.title}</h2>
                    <p className='logementDetail__location'>{logement.location}</p>
                    <ul className='logementDetail__tags'>
                        {logement.tags.map((tag, index) => (
                            <li key={index} className='logementDetail__tags--item logementDetail__tags--title'>{tag}</li>
                        ))}
                    </ul>
                </div>

                <div className='logementDetail__column logementDetail__column--right'>
                    <div className='logementDetail__profil'>
                        <p className='logementDetail__profil--name'>
                            {fullname.map((name, index) => (
                            <span key={index + '-' + name}>{name}</span>
                        ))}</p>
                        <p><img className='logementDetail__profil--photo' src={logement.host['picture']} alt={"Photo de profil de " + logement.host['name']}></img></p>
                    </div>

                    <RatingHost rating={logement.rating} />
                    
                </div>
            </div>

            <div className='logementDetail__collapse'> 

                <Collapse title="Description" content={logement.description} />

                <Collapse 
                            title="Équipements" 
                            content={
                                <ul>
                                    {logement.equipments.map((equipment, index) => (
                                        <li key={equipment + '-' + index}>{equipment}</li>
                                    ))}
                                </ul>
                            } />
            </div>
    
        </div>
        
    );
};

export default LogementDetail;