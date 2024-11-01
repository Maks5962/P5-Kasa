import React from 'react';

const Collapse = ({title, content}) => {
    return (

    <details className="collapse">
        <summary className="collapse__title">{title}</summary>
        <div className="collapse__content">
            {content}
        </div>        
    </details>

    );
};

export default Collapse;


