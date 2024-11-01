import React from 'react';

const Banner = ({ showTitle, titleBanner, imageSrc, imageAlt, overlayOpacity}) => {
    return (
        <div className='banner'>
            <img src={imageSrc} alt={imageAlt} className='banner__img'></img>
            {showTitle && <h1 className='banner__title banner__title--font'>{titleBanner}</h1>}
            <div className='banner__overlay' 
            style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`}} ></div>
        </div>   
    );
};

export default Banner;