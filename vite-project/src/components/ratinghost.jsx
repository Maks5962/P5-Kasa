import React from 'react';

const RatingHost = ({ rating }) => {
    const totalStars = 5; // Nombre total d'étoiles max

    return (
        <div className="ratingHost">
            {/* Création d'un tableau vide de 5 éléments */ }
            {[...Array(totalStars)].map((_, index) => ( 
                <img key={index + '-' + rating}
                src={index < rating ? '../src/img/vector-star.svg' : '../src/img/vector-badstar.svg' /* Si index < Note (rating) j'affiche l'étoile pleine */ }
                    alt={'Note globale = ' + rating + '/5'}></img>
            ))}
        </div>
    );
};

export default RatingHost;