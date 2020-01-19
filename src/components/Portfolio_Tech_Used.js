import React, { useEffect, useState } from 'react';

import './portfolio_tech_used.css'

const PortfolioTechUsed = (props) => {

    const [image, setImage] = useState("");

    const loadImage = imageName => {
        import(`../images/TechIcons/${imageName}.png`).then(image => {
            setImage(image.default);
        })
    }

    useEffect(()=> {
        loadImage(props.tech);
    },[]);

    return (
        <div className="TechImage">
            <img src={image} alt="tech" className="T_Image"/>
        </div>
    );
}

export default PortfolioTechUsed;