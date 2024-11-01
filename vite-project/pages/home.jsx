import React from 'react';
import Logements from '/components/logements';
import Banner from '/components/banner'

const Home = ({logements}) => {
    return (
        <>
            <Banner showTitle={true} 
                imageSrc="/src/img/image-source-1.jpg" 
                imageAlt="Scène cotière montrant l'océan et une petite plage avec des rochers." 
                titleBanner="Chez vous, partout et ailleurs"/>
            <Logements logements={logements}/>            
        </>
    );
};

export default Home;