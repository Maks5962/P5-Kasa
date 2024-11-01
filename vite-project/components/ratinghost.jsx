import React from 'react';

const RatingHost = ({ rating }) => {
    const totalStars = 5; // Nombre total d'étoiles max

    return (
        <div className="ratingHost">
            {[...Array(totalStars)].map((_, index) => (
                <img key={index + '-' + rating}
                src={index < rating ? '../src/img/vector-star.svg' : '../src/img/vector-badstar.svg'}
                    alt={'Note globale = ' + rating + '/5'}></img>
            ))}
        </div>
    );
};

export default RatingHost;