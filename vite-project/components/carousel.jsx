import React, { useState } from 'react';

const Carousel = ({pictures}) => {

    // Tableau d'URLs d'images
    const picturesLogement = pictures;

    // Etat pour suivre l'index de l'image actuellement affichée, initialement la première photo du tableau (index 0)
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour passer à l'image suivante avec modulo 
    const nextImage = () => {
        setCurrentIndex((actuelIndex) => (actuelIndex + 1) % picturesLogement.length); // Retourne à la première image lorsque la dernière est atteinte
    };

    // Fonction pour revenir à l'image précédente avec modulo
    const prevImage = () => {
        setCurrentIndex((actuelIndex) => (actuelIndex - 1 + picturesLogement.length) % picturesLogement.length); // Retourne à la dernière image lorsque la première est atteinte
    };

    return (
        <div className="carouselContainer">
            <div className="carouselContainer__display">
                {/* Affichage de l'image actuelle */}
                <img 
                    src={picturesLogement[currentIndex]} 
                    alt={`Photo n°${currentIndex + 1}`} 
                    className='carouselContainer__display--img'
                />
            </div>
            
            {picturesLogement.length > 1 && ( // Si plusieurs photos, j'affiche les boutons de controle
                <div className="carouselContainer__controls">
                    {/* Boutons de navigation */}
                    <div 
                        onClick={prevImage} 
                        className='carouselContainer__controls--btn prev'
                    >
                        <img src="../src/img/arrow_back.png" alt="Précédent" />
                    </div>

                    <div className='carouselContainer__controls--position'>
                    {currentIndex + 1} / {picturesLogement.length}
                    </div>

                    <div 
                        onClick={nextImage} 
                        className='carouselContainer__controls--btn next'
                    >
                        <img src="../src/img/arrow_forward.png" alt="Suivant" />
                    </div>

                </div>
            )}
        </div>
    );
};

export default Carousel;
