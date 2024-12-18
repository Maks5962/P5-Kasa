import React from 'react';
import Logements from '../../src/components/logements';
import Banner from '../../src/components/banner'


const Home = () => {

    
    return (
        <>
            <Banner showTitle={true} 
                imageSrc="/src/img/image-source-1.jpg" 
                imageAlt="Scène cotière montrant l'océan et une petite plage avec des rochers." 
                titleBanner="Chez vous, partout et ailleurs"/>
            <Logements />            
        </>
    );
};

export default Home;