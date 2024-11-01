import React from 'react';
import Banner from '/components/banner'

const About = () => {
    return (
        <>
            <Banner showTitle={false} 
                imageSrc="/src/img/image-source-2.jpg" 
                imageAlt="Payages d'une forêt de pins devant les montagnes enneigées."
                overlayOpacity={0.3} />           
        </>
    );
};

export default About;