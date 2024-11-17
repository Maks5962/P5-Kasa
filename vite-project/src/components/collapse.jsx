import React, { useRef, useState } from 'react';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null); // Création de l'objet de référence vide

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <button onClick={toggleCollapse} className="collapse__title collapse__title--text">
                {title} 
                    <img src="../src/img/vector-collapse.png" className={`collapse__icon ${isOpen ? 'rotate' : ''}`} 
                    alt="Icone d'ouverture ou fermeture"></img>
            </button>
            <div
                ref={contentRef} // Attribution de la référence au DOM
                className="collapse__content"
                style={{
                    height: isOpen ? `${contentRef.current.scrollHeight}px` : '0px', // Récupération de la hauteur totale du contenu même masqué
                }} >
                <div className="collapse__inner-content">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Collapse;